// backend/server.js
const express = require('express');
const multer  = require('multer');
const path    = require('path');
const cors    = require('cors');
const fs      = require('fs');
const bcrypt  = require('bcryptjs');
const db      = require('./db');
const http    = require('http');          // ⬅ for Socket.io
const { Server } = require('socket.io');  // ⬅ Socket.io server
require('dotenv').config();
const OpenAI  = require('openai');        // ⬅ OpenAI SDK

// where uploaded images will be stored
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const upload = multer({ dest: uploadDir });

const app = express();
const server = http.createServer(app); // ⬅ create HTTP server
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

// Around line 20-35 in server.js
app.use(cors());
app.use(express.json());

// ✅ PERFECT FOR YOUR STRUCTURE
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/img', express.static(path.join(__dirname, '../img')));
app.use(express.static(path.join(__dirname, '..')));  // Root HTML files LAST


// ========== OpenAI Setup ==========
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// ✅ AUTO-CREATE ALL JSON FILES ON STARTUP
function createAllJsonFiles() {
  console.log('🔄 Creating JSON files...');
  
  // Ensure tables exist
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, email TEXT UNIQUE, phone TEXT, password_hash TEXT
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS prescriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER, filename TEXT, original_name TEXT, upload_time TEXT,
    frame_name TEXT, frame_price REAL, glass_name TEXT, glass_price REAL
  )`);
  
  // 1. CREATE users.json
  db.all('SELECT id, name, email, phone FROM users', [], (err, users) => {
    const USERS_JSON = path.join(__dirname, 'users.json');
    fs.writeFileSync(USERS_JSON, JSON.stringify(users || [], null, 2));
    console.log(`✅ users.json created: ${users?.length || 0} users`);
  });
  
  // 2. CREATE orders.json
  const orderSql = `
    SELECT p.id as order_id, p.user_id, u.name, u.email, u.phone,
           p.filename, p.original_name, p.upload_time,
           p.frame_name, p.frame_price, p.glass_name, p.glass_price
    FROM prescriptions p LEFT JOIN users u ON p.user_id = u.id
    ORDER BY p.upload_time DESC
  `;
  db.all(orderSql, [], (err, orders) => {
    const ORDERS_JSON = path.join(__dirname, 'orders.json');
    fs.writeFileSync(ORDERS_JSON, JSON.stringify(orders || [], null, 2));
    console.log(`✅ orders.json created: ${orders?.length || 0} orders`);
  });
}

// JSON log for prescriptions
const PRESC_JSON = path.join(__dirname, 'prescriptions.json');
function loadPrescJson() {
  if (!fs.existsSync(PRESC_JSON)) return [];
  return JSON.parse(fs.readFileSync(PRESC_JSON, 'utf8'));
}
function savePrescJson(arr) {
  fs.writeFileSync(PRESC_JSON, JSON.stringify(arr, null, 2));
}

/* ================= AUTH ROUTES ================= */
app.post('/signup', (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password required' });
  }

  const hash = bcrypt.hashSync(password, 10);

  const sql = `INSERT INTO users (name, email, phone, password_hash)
               VALUES (?, ?, ?, ?)`;
  db.run(sql, [name || '', email, phone || '', hash], function (err) {
    if (err) {
      console.error('Signup error:', err);
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }
    createAllJsonFiles(); // Refresh JSON after signup
    return res.json({ success: true, userId: this.lastID });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
    if (err || !user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    const ok = bcrypt.compareSync(password, user.password_hash);
    if (!ok) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    return res.json({
      success: true,
      userId: user.id,
      email: user.email,
      name: user.name
    });
  });
});

/* ============== PRESCRIPTION ENDPOINTS ============== */
app.post('/analyze', upload.single('prescription'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file received' });
    }
    console.log('Uploaded file (analyze only):', req.file);
    return res.json({
      success: true,
      glasses: [
        { id: 1, name: "Hard Coat",           range: "-2.00 to +2.00", price: 800 },
        { id: 2, name: "Blue Light Coating",  range: "-4.00 to +4.00", price: 1200 },
        { id: 3, name: "Green Light Coating", range: "-4.00 to +4.00", price: 1100 },
        { id: 4, name: "Scratch Resistant",   range: "-6.00 to +6.00", price: 1500 },
        { id: 5, name: "UV Protection",       range: "-6.00 to +6.00", price: 1300 }
      ]
    });
  } catch (err) {
    console.error('Analyze error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/upload-prescription', upload.single('prescription'), (req, res) => {
  const userId = req.body.userId;
  if (!userId) {
    return res.status(400).json({ success: false, message: 'userId is required' });
  }
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const file = req.file;
  const uploadTime = new Date().toISOString();

  const sql = `INSERT INTO prescriptions (user_id, filename, original_name, upload_time)
               VALUES (?, ?, ?, ?)`;
  db.run(sql,
    [userId, file.filename, file.originalname, uploadTime],
    function (err) {
      if (err) {
        console.error('DB insert error:', err);
        return res.status(500).json({ success: false, message: 'DB error' });
      }

      const recordId = this.lastID;

      const all = loadPrescJson();
      const record = {
        id: recordId,
        user_id: Number(userId),
        filename: file.filename,
        original_name: file.originalname,
        url: `/uploads/${file.filename}`,
        upload_time: uploadTime,
        frame_name: null,
        frame_price: null,
        glass_name: null,
        glass_price: null
      };
      all.push(record);
      savePrescJson(all);

      createAllJsonFiles(); // Refresh JSON after upload
      return res.json({ success: true, prescription: record });
    });
});

app.post('/prescription/update-choice', (req, res) => {
  const { prescriptionId, frameName, framePrice, glassName, glassPrice } = req.body;
  if (!prescriptionId) {
    return res.status(400).json({ success: false, message: 'prescriptionId required' });
  }

  const sql = `UPDATE prescriptions
               SET frame_name = ?, frame_price = ?, glass_name = ?, glass_price = ?
               WHERE id = ?`;
  db.run(sql, [frameName, framePrice, glassName, glassPrice, prescriptionId], function (err) {
    if (err) {
      console.error('Update error:', err);
      return res.status(500).json({ success: false });
    }

    const all = loadPrescJson();
    const idx = all.findIndex(p => p.id === Number(prescriptionId));
    if (idx !== -1) {
      all[idx].frame_name  = frameName;
      all[idx].frame_price = framePrice;
      all[idx].glass_name  = glassName;
      all[idx].glass_price = glassPrice;
      savePrescJson(all);
    }

    createAllJsonFiles(); // Refresh JSON after update
    res.json({ success: true });
  });
});

app.get('/prescriptions', (req, res) => {
  const all = loadPrescJson();
  res.json(all);
});

/* ============ ADMIN ROUTES ============ */
app.get('/admin/users', (req, res) => {
  db.all('SELECT id, name, email, phone FROM users', [], (err, rows) => {
    if (err) return res.status(500).json({ success: false });
    res.json(rows || []);
  });
});

app.get('/admin/prescriptions', (req, res) => {
  const sql = `
    SELECT p.id, p.user_id, u.name, u.email, u.phone,
           p.filename, p.original_name, p.upload_time,
           p.frame_name, p.frame_price, p.glass_name, p.glass_price
    FROM prescriptions p
    LEFT JOIN users u ON p.user_id = u.id
    ORDER BY p.upload_time DESC
  `;
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ success: false });
    rows = rows.map(r => ({
      ...r,
      image_url: `/uploads/${r.filename}`
    }));
    res.json(rows || []);
  });
});

app.get('/admin/export-all', (req, res) => {
  createAllJsonFiles();
  res.json({ success: true, message: 'All JSON files created!' });
});

/* ============ CHATBOT LOGIC ============ */

// HARDCODED PRODUCTS (fallback when no DB)
const PRODUCTS = [
  { name: "Ray-Ban Wayfarer", price: 4500, category: "sunglasses" },
  { name: "Power Glasses -2.5", price: 2500, category: "prescription" },
  { name: "Oakley Holbrook", price: 6500, category: "sunglasses" },
  { name: "Blue Light Glasses", price: 1800, category: "prescription" }
];

// Helper: build context from prescriptions/users (very simple RAG)
async function buildUserContext(userId) {
  return new Promise((resolve) => {
    if (!userId) return resolve('Guest user - no orders found.');
    
    const sql = `
      SELECT p.id, p.upload_time, p.frame_name, p.glass_name, u.name, u.email
      FROM prescriptions p
      LEFT JOIN users u ON p.user_id = u.id
      WHERE p.user_id = ?
      ORDER BY p.upload_time DESC
      LIMIT 5
    `;
    db.all(sql, [userId], (err, rows) => {
      console.log('🗂️ User orders found:', rows?.length || 0);
      if (err || !rows?.length) {
        return resolve('No recent orders. Try uploading prescription first!');
      }
      resolve(`User orders: ${JSON.stringify(rows.slice(0,2))}`); // Limit size
    });
  });
}

async function processChatMessage(message, userId) {
  console.log('🧠 Chat:', message, 'User:', userId || 'guest'); // DEBUG
  
  try {
    const userContext = await buildUserContext(userId);
    const productList = PRODUCTS.map(p => `${p.name} (₹${p.price})`).join(', ');
    
    const systemPrompt = `
You are OptiMart AI assistant for glasses store.
CONTEXT:
- Products: ${productList}
- User orders: ${userContext}

TASKS:
1. Glasses/frame recommendations by power/budget
2. Prescription upload guide: Go to prescription.html → Upload → Choose frame/glass
3. Order status: Check userContext or say "Check admin dashboard"
4. Be friendly, use Hindi/English mix if asked

EXAMPLES:
"glasses for -2.5" → "Power Glasses -2.5 (₹2500) perfect!"
"my order" → Use userContext or "Upload prescription to track"
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      max_tokens: 300,
      temperature: 0.3
    });

    const reply = completion.choices[0].message.content;
    console.log('🤖 AI Reply:', reply.substring(0, 50) + '...');
    return reply;

  } catch (err) {
    console.error('💥 OpenAI Error:', err.message);
    // FALLBACK responses (no API needed)
    const fallbacks = {
      'glasses': 'OptiMart has sunglasses (₹4500+) and prescription glasses (₹1800+). Visit filter.html!',
      'prescription': '1. Go to prescription.html 2. Upload doctor prescription 3. Choose frame/glass 4. Confirm order!',
      'order': `No orders found. Upload prescription first! Products: ${PRODUCTS.map(p=>p.name).join(', ')}`,
      'default': 'Try: "glasses for -2.5", "how to upload prescription", "sunglasses under 5000"'
    };
    
    const lowerMsg = message.toLowerCase();
    for (let key in fallbacks) {
      if (lowerMsg.includes(key)) return fallbacks[key];
    }
    return fallbacks.default;
  }
}

// 1) REST endpoint (for simple AJAX call)
app.post('/chat', async (req, res) => {
  try {
    const { message, userId } = req.body;
    console.log('📱 REST chat:', message);
    if (!message) return res.status(400).json({ success: false, message: 'message required' });
    
    const reply = await processChatMessage(message, userId);
    res.json({ success: true, reply });
  } catch (err) {
    console.error('REST chat error:', err);
    res.status(500).json({ success: false, message: 'Chat error' });
  }
});

// 2) Socket.io real-time chat (for chat.html widget)
io.on('connection', (socket) => {
  console.log('🟢 Socket connected:', socket.id);

  socket.on('chat-message', async (data) => {
    console.log('💬 Socket message:', data.message);
    try {
      const reply = await processChatMessage(data.message, data.userId);
      socket.emit('bot-reply', { reply });
    } catch (err) {
      console.error('Socket error:', err);
      socket.emit('bot-reply', { reply: 'Try: "recommend glasses" or "upload prescription?"' });
    }
  });

  socket.on('disconnect', () => console.log('🔴 Socket disconnected'));
});

/* ================= START SERVER ================= */
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Backend + Chatbot running on http://localhost:${PORT}`);
  console.log('📁 Creating JSON files automatically...');
  createAllJsonFiles();
});
