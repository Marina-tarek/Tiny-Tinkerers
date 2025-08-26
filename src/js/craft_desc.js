let params = new URLSearchParams(window.location.search);
let craftId = params.get("id");
console.log(craftId); 


let CraftList = JSON.parse(localStorage.getItem('crafts-idea')) || [];


let craftDesc = CraftList.find(craft => craft.id == craftId);
console.log(craftDesc);



function displayFirstInformation(craft){
     document.getElementById("craft_desc_title").innerHTML=`
     <div class="flex justify-center">
<h2 class="text-[#EE4F31] text-3xl font-bold my-4 font-serif  underline decoration-wavy">${craft.name}</h2>
     </div>
     <div class="flex  justify-around lg:justify-between items-center flex-wrap my-7">
    <div class="w-10/12 md:w-5/12 mb-7 md:mb-0 ">
       <img src="${craft.main_image}" alt="${craft.name}" class="w-full aspect-[15/12] object-fill">
    </div>
    <div class="w-10/12 md:w-6/12">
       <p class="text-black dark:text-white">${craft.description}</p>
    </div>
    </div>
    `
 
}
displayFirstInformation(craftDesc)

function displayAllSteps(method) {
show="";
for (let i = 0; i < method.images.length; i++) {
    show+=`
        <div class="w-[55%] mx-auto md:w-[40%] md:mx-0 lg:w-[30%] xl:w-[23%] relative">
<img src="${method.images[i]}" alt="${method.name}" class="w-full h-[300px] object-cover">
<div class="absolute w-[40px] h-[40px] rounded-full bg-[#00C2D7] top-[10px] left-[5px] flex justify-center items-center text-2xl text-white"><span> ${[i]} </span> </div>
</div>
    `
    
}

    document.getElementById("craft_desc_imges").innerHTML=show
    
}

displayAllSteps(craftDesc)