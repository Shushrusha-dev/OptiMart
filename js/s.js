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
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/Lenskart-Air-LA-E14360-C1-Eyeglasses_J_1837.jpg',
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/green-transparent-green-full-rim-round-lenskart-air-essentials-la-e16715-c2-eyeglasses_img_5255_04_03_2024.jpg',
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-transparent-full-rim-round-lenskart-air-classic-la-e14532-c2-eyeglasses_g_9419.jpg',
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/Black-Full-Rim-Round-Lenskart-Air-Flex-LA-E11482-XS-C1-Eyeglasses_lenskart-air-la-e11482-xs-c1-eyeglasses_G_292909_02_2022.jpg',
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/matte-black-gunmetal-grey-transparent-full-rim-round-vincent-chase-sleek-steel-vc-e13784-c2-eyeglasses__dsc9715_09_01_2025.jpg',
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/green-transparent-full-rim-round-lenskart-air-classic-la-e14532-c3-eyeglasses_g_9426.jpg',
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/black-gold-black-full-rim-round-john-jacobs-tr-flex-jj-e14410-c6-eyeglasses__dsc7005_20_06_2024.jpg',
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/pink-transparent-rose-gold-full-rim-round-vincent-chase-blend-edit-vc-e000272-c1-eyeglasses__dsc9075_08_11_2024.jpg',
    'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/silver-black-rimless-round-john-jacobs-pro-titanium-jj-e12340-c2-eyeglasses_g_0906_2_jun2023.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e17093-c1-eyeglasses__dsc5118_31_05_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e13743-c2-eyeglasses_g_5088.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/silver-white-silver-transparent-full-rim-round-john-jacobs-supreme-steel-jj-e13107-c6-eyeglasses_g_9448_09_09_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Purple-Silver-Purple-Transparent-Full-Rim-Round-Vincent-Chase-SLEEK-STEEL-VC-E13784-C1-Eyeglasses_vincent-chase-vc-e13784-c1-eyeglasses_g_301709_02_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/silver-blue-rimless-oval-john-jacobs-eco-acetate-jj-e16576-c1-eyeglasses_img_2938_28_02_2023.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/green-gunmetal-full-rim-round-lenskart-air-fusion-la-e13071-c4-eyeglasses_csvfile-1692341357122-g_8766.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-transparent-gunmetal-blue-full-rim-round-lenskart-air-essentials-la-e15847-c3-eyeglasses_g_0287_25_05_2023.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e17450-c3-eyeglasses_dsc4650_23_08_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/pink-transparent-pink-full-rim-round-lenskart-air-essentials-la-e16719-c1-eyeglasses_img_5104_04_03_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-wine-full-rim-round-lenskart-air-essentials-la-e17305-c2-eyeglasses_dsc7926_10_09_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//f/i/brown-purple-tortoise-full-rim-round-fossil-premium-fos-7149-g-4in-eyeglasses_g_9533_05_17_23.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s14046-c4-sunglasses_G_3986.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/blue-gunmetal-full-rim-round-john-jacobs-rich-acetate-jj-e13741-c5-eyeglasses_img_4599_01_03_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/John-Jacobs-JJ-E14373-C3-Eyeglasses_G_7628.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/green-full-rim-round-john-jacobs-rich-acetate-jj-e13877-c2-eyeglasses_csvfile-1683102562695-g_4950.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e11736-c1-eyeglasses_G_0343.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/black-silver-black-full-rim-round-john-jacobs-gilded-jewels-jj-e15273-c1-eyeglasses_g_9359_27_jan_2023.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-transparent-full-rim-round-john-jacobs-tr-flex-jj-e14410-c5-eyeglasses_pp_dsc9319.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/Brown-Tortoise-Black-Full-Rim-Round-Lenskart-Air-Flex-LA-E11482-C2-Eyeglasses_lenskart-air-la-e11482-c2-eyeglasses_g_010307_02_2022.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/transparent-pink-full-rim-round-john-jacobs-rich-acetate-jj-e70086-c1-eyeglasses__dsc7433_21_10_2024.jpg',
	'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e12543xl-c3-eyeglasses_g_6699.jpg'
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

 