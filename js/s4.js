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
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Silver-Maroon-Full-Rim-Geometric-Vincent-Chase-LIVEWIRE-VC-S14506-C5-Polarized-Sunglasses_G_7229.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/brown-gold-black-full-rim-geometric-vincent-chase-polarized-pilot-collection-vc-s15403-c2-sunglasses_g_0715_01_02_2023.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Black-Full-Rim-Square-Vincent-Chase--MIRAGE1VC-S11748-C8-Polorized-Sunglasses_vincent-chase-vc-s11748-c8-sunglasses_g_5574_218_02_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s15407-c1-sunglasses_g_2710_07_02_2023.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-blue-full-rim-round-vincent-chase-livewire-vc-s14505-c5-polarized-sunglasses_g_7702.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/brown-full-rim-aviator-vincent-chase-the-metal-edit-vc-s13835-c3-polarized-sunglasses_vincent-chose-vc-s13835-frll-rum-c3-sunglasses_sunglasses_g_3405_1_28july23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-blue-gradient-full-rim-aviator-vincent-chase-polarized-vintage-vc-s11075-c12-sunglasses_g_3383_6_02_22.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/green-gold-full-rim-geometric-vincent-chase-polarized-pilot-collection-vc-s15403-c1-sunglasses_g_0755_01_02_2023.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/gold-brown-gradient-full-rim-square-john-jacobs-jj-tints-jj-s12473-c2-sunglasses_g_8651_front.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-s16897-c4-sunglasses_img_3197_18_jan24.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-pink-gradient-full-rim-square-vincent-chase-polarized-met-effect-vc-s15400-c3-sunglasses_g_1035_02_02_23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-the-metal-edit-vc-s15765-c2-sunglasses_img_4742_24_01_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/gold-tortoise-brown-full-rim-aviator-john-jacobs-jj-rhapsody-jj-s15328-c1-sunglasses_g_3000_02_13_23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/matte-black-full-rim-wayfarer-vincent-chase-style-cast-pc-vc-s13820-c3-polarized-sunglasses_vincent-chase-vc-s13820-c3-suglasses_suglasses_g_6195_5july23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/transparent-green-grey-full-rim-wayfarer-vincent-chase-polarized-athleisure-vc-s14459-c6-sunglasses_g_2600_9_29_22.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/yellow-gold-full-rim-rectangle--square-vincent-chase-polarized-wedding-edit-vcs000254-sunglasses__dsc1742_26_11_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/black-grey-full-rim-wayfarer-vincent-chase-polarized-athleisure-vc-s14459-c7-sunglasses_g_2628_9_29_22.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/tortoise-full-rim-wayfarer-vincent-chase-mirage-vc-s11167-l1-sunglasses_g_4350_12_07_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Gold-Black-Grey-Gradient-Full-Rim-Square-Vincent-Chase-Polarized-VINTAGE-VC-S11748-C4-Polarized-Sunglasses_vincent-chase-vc-s11748-c4-sunglasses_sunglasses_G_126118_02_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-gunmetal-full-rim-hexagonal-john-jacobs-jj-tints-jj-s12472--c2-sunglasses_john-jacobs-jj-s12472-c2-sunglasses_sunglasses_g_1972_1_1_05_july23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-grey-full-rim-round-vincent-chase-polarized-the-metal-edit-vc-s13112-c4-polarized-sunglasses_vincent-chase-vc-s13112-c4-sunglasses_sunglasses_j_3396_1_1_5july23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-black-green-full-rim-round-vincent-chase-the-metal-edit-vc-s13137-c5-sunglasses_vincent-chase-vc-s13137-c5-c5-sunglasses_g_8679_5july23.jpg'
	
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

 