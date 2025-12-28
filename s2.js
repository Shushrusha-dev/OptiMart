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
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e15958-c1-eyeglasses_g_3362_18_09_2023.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Matte-Black-Full-Rim-Aviator-Vincent-Chase-SLEEK-STEEL-VC-E13046-C3-Eyeglasses_vincent-chase-vc-e13046-c3-eyeglasses_G_7290_1_10_02_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-lae000191-c1-eyeglasses_dsc8847_24_09_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/blue-block-phone---computer-glasses:-black-full-rim-aviator-vincent-chase-sleek-steel-vc-e13046-m-c2_vincent-chase-vc-e13046-m-c2-full-rim-aviator-eyeglasses_g_7185_5july23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14893-c3-eyeglasses_g_2438_28_09_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/blue-block-phone---computer-glasses:-blue-gunmetal-full-rim-aviator-vincent-chase-blend-edit-vc-e13349---c2-eyeglasses_vincent-chase-vc-e13349-c2-eyeglasses_vincent-chase-vc-e13349-c2-eyeglasses_g_6322_2_5july23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-full-rim-aviator-vincent-chase-sleek-steel-vc-e000077-c8-eyeglasses_dsc0470_10_09_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-grey-full-rim-aviator-lenskart-air-flex-la-e11483-xs-c3-eyeglasses_g_0277_03_20_23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e14797-c3-eyeglasses_g_6994_21_12_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e15347-c1-eyeglasses_csvfile-1684493324462-g_0006_19_05_2023.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Metal-Blue-Rimless-Aviator-Vincent-Chase-SLEEK-STEEL-VC-E12421-C3-Eyeglasses_vincent-chase-rim-less-round-vc-e12421-c3-eyeglasses_g_9252_2_1_10_02_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vce000373-c1-eyeglasses_dsc7529_02_01_2025.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/grey-transparent-grey-full-rim-aviator-lenskart-air-flex-la-e11483-xs-c4-eyeglasses_img_6079_05_03_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e11483-c5-eyeglasses_g_6420_29_11_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/Black-Full-Rim-Aviator-Lenskart-Air-Flex-LA-E11483-C1-Eyeglasses_lenskart-air-la-e11483-c1-eyeglasses_g_296207_02_2022.jpg'
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

 