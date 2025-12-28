let boxDropdown = document.querySelectorAll('.boxDropdown');
for (let x = 0; x < document.querySelectorAll('li.categ').length; x++) {
    let list = document.querySelectorAll('li.categ')[x];
    let boxDropdown_list =  document.querySelectorAll('.boxDropdown')[x];
    list.addEventListener('mouseenter',() =>{
        boxDropdown_list.style.display = 'block';
    })
    list.addEventListener('mouseleave',() =>{
        boxDropdown_list.style.display = 'none';
    })
	
}
for (let x = 0; x < boxDropdown.length; x++) {
    const box = boxDropdown[x];
    box.addEventListener('mouseenter',() =>{
        box.style.display = 'block';
    })
    box.addEventListener('mouseleave',() =>{
        box.style.display = 'none';
    })
}
let glasses = document.querySelectorAll('.results > div');
let img = document.querySelectorAll('div.results div img.glass');
let frontPose = [
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/pink-transparent-multicolour-full-rim-cat-eye-vincent-chase-classic-acetate-vc-e16668-c2-eyeglasses_img_2121_19_jan24.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/pink-transparent-full-rim-cat-eye-lenskart-air-fusion-la-e14101-c2-eyeglasses_lenskart-air-la-e14101-c2-c2-eyeglasses_g_7523_28july23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/brown-multicolour-full-rim-cat-eye-vincent-chase-classic-acetate-vc-e16666-c2-eyeglasses_img_2053_19_jan24.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/purple-full-rim-cat-eye-vincent-chase-sleek-steel-vc-e16789-c2-eyeglasses_img_7966_06_03_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/brown-transparent-silver-full-rim-cat-eye-vincent-chase-blend-edit-vc-e14973-c2-eyeglasses_g_3516_10_14_22.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/grey-transparent-full-rim-cat-eye-lenskart-air-flex-la-e11484-c4-eyeglasses_csvfile-1698312729422-g_7002.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Purple-Brown-Full-Rim-Cat-Eye-Vincent-Chase-Classic-Acetate-VC-E13029-C2-Eyeglasses_vincent-chase-vc-e13029-c2-eyeglasses_vincent-chase-vc-e13029-c2-eyeglasses_g_6199_10_02_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e16640-c1-eyeglasses_img_0214_09_01_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13393-c1-eyeglasses_vincent-chase-vc-e13393-c1-eyeglasses_vincent-chase-vc-e13393-c1-eyeglasses_g_9657.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13029-c1-eyeglasses_vincent-chase-vc-e13029-c1-eyeglasses_vincent-chase-vc-e13029-c1-eyeglasses_g_6192.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e16640-c2-eyeglasses_img_0148_09_01_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/grey-transparent-gold-sky-blue-full-rim-rectangle-vincent-chase-blend-edit-vc-e14974-c3-eyeglasses_g_3486_10_14_22.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/purple-transparent-havana-full-rim-cat-eye-vincent-chase-classic-acetate-vc-e16069-c2-eyeglasses_g_2080_14_09_2023.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13393-c2-eyeglasses_vincent-chase-vc-e13393-c2-eyeglasses_G_5011.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e14101-n-c1-eyeglass__dsc2072_18_09_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/tortoise-gold-full-rim-cat-eye-vincent-chase-blend-edit-vc-e14107-c1-eyeglasses_vincent-chase-vc-e14107-c1-c1-eyeglasses_vincent-chase-vc-e14107-c1-c1-eyeglasses_g_8542_5july23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-lae000293-c1-eyeglasses__dsc8849_11_11_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e16069-c1-eyeglasses_g_7939_04_10_2023.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/purple-mid-gunmetal-full-rim-cat-eye-vincent-chase-blend-edit-vc-e14973-c5-eyeglasses_dsc0976_31_07_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/purple-full-rim-cat-eye-vincent-chase-sleek-steel-vc-e16658-c2-eyeglasses_img_2430_04_04_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/red-rose-gold-full-rim-cat-eye-vincent-chase-blend-edit-vc-e14104-c1-eyeglasses_vincent-chase-vc-e14104-c1-c1-eyeglasses_vincent-chase-vc-e14104-c1-c1-eyeglasses_g_8516_5july23.jpg'
	
]

for (let x = 0; x < glasses.length; x++) {
    const glassimage = img[x];
    glassimage.setAttribute('src',frontPose[x]);
    glassimage.addEventListener('mouseenter',() =>{
        glassimage.setAttribute('src',sidePose[x])
    })
    glassimage.addEventListener('mouseleave',() =>{
        glassimage.setAttribute('src',frontPose[x])
    })
}
let scrollUp = document.querySelector('.scrollUp');
let pokewhite = 'https://img.icons8.com/ios/50/000000/up-arrow.png';
let pokeblack = 'https://img.icons8.com/ios-filled/50/000000/up-arrow.png';

scrollUp.setAttribute('src',pokewhite);
scrollUp.addEventListener('mouseenter',() =>{
    scrollUp.setAttribute('src',pokeblack);
})
scrollUp.addEventListener('mouseleave',() =>{
    scrollUp.setAttribute('src',pokewhite);
})
scrollUp.addEventListener('click',() =>{
    window.scrollTo(0,0);
})

 