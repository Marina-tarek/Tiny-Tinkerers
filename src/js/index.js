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

  } catch (error) {
    console.error('Error loading or storing data:', error);
  }
}
loadAndStoreData();



let List = JSON.parse(localStorage.getItem('crafts-idea')) || [];

function displaySomeCraft(){
  cartona='';
  for (let i = 0; i < 8; i++) {
   cartona+=`<div class="craft_card bg-white p-6 rounded-2xl shadow-lg hover:scale-105 hover:bg-[#EE4F31] hover:text-white transition text-center w-7/12  md:w-5/12 lg:w-4/12 xl:w-[22%] relative">
            <img src="${List[i].main_image}" alt="${List[i].name}" class="rounded-xl  w-full h-[15rem] object-fill">
            <div class="card-title-bar text-center py-2.5 px-5  bg-[#EE4F31] hover:bg-white hover:text-[#EE4F31] absolute top-[50%]">
              <h3 class="text-2xl font-semibold font-serif">${List[i].name}</h3>
            </div>
            <p class="text-gray-600 mt-10">${List[i].description.split(" ").slice(0,20).join(" ")}</p>
          <div class="mt-10">
          <a href="craft_desc.html?id=${List[i].id}" class="btn text-xl bg-[#00C2D7]  py-2 px-2.5 rounded-4xl text-white hover:bg-white hover:text-[#00C2D7] hover:border-[#00C2D7] transition-all">Show This Craft</a></div>
        </div>
          </div>`
    
  }
  document.getElementById("popular_craft_cards").innerHTML=cartona


}

displaySomeCraft()