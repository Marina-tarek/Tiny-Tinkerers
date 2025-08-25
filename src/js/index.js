// ===XMLHttpRequest
// var featuredProducts = new XMLHttpRequest();
// featuredProducts.open("GET", "../../src/js/miniCrafts.json", true);

// featuredProducts.onreadystatechange = function () {
//   if (featuredProducts.readyState === 4 && featuredProducts.status === 200) {
//     var featured = JSON.parse(featuredProducts.responseText);
// console.log(featured.Crafts);
//   }
// };
// featuredProducts.send();

async function loadAndStoreData() {
  try {
    const response = await fetch('../../src/js/miniCrafts.json'); 
    const jsonData = await response.json(); 

 
    localStorage.setItem('crafts-idea', JSON.stringify(jsonData.Crafts));
    console.log(jsonData.Crafts);

  } catch (error) {
    console.error('Error loading or storing data:', error);
  }
}

loadAndStoreData();

