let CraftList = JSON.parse(localStorage.getItem('crafts-idea')) || [];
console.log(CraftList);


function displayAllCraft(){
  cartonaa='';
  for (let z = 0; z< CraftList.length; z++) {
   cartonaa+=`<div class="craft_card bg-white p-6 rounded-2xl shadow-lg hover:scale-105 hover:bg-[#EE4F31] hover:text-white transition text-center w-7/12  md:w-5/12 lg:w-[26%] xl:w-[22%] relative">
            <img src="${CraftList[z].main_image}" alt="${CraftList[z].name}" class="rounded-xl  w-full h-[15rem] object-fill">
            <div class="card-title-bar text-center py-2.5 px-5  bg-[#EE4F31] hover:bg-white hover:text-[#EE4F31] absolute top-[50%]">
              <h3 class="text-2xl font-semibold font-serif">${CraftList[z].name}</h3>
            </div>
            <p class="text-gray-600 mt-10">${CraftList[z].description.split(" ").slice(0,15).join(" ")}</p>
          <div class="mt-10">
          <a href="craft_desc.html?id=${CraftList[z].id}" class="btn text-xl bg-[#00C2D7]  py-2.5 px-5 rounded-4xl text-white hover:bg-white hover:text-[#00C2D7] hover:border-[#00C2D7] transition-all">Show This Craft</a></div>
        </div>
          </div>`
    
  }
  document.getElementById("All_craft_cards").innerHTML=cartonaa
}

displayAllCraft()