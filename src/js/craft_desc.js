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
     <div class="flex  justify-around lg:justify-evenly items-center flex-wrap my-7">
    <div class="w-10/12 lg:w-5/12 mb-7 lg:mb-0 rounded-2xl overflow-hidden h-[65vh]">
       <img src="${craft.main_image}" alt="${craft.name}" class="w-full h-full object-fill">
    </div>
    <div class="w-10/12 lg:w-6/12">
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
        <div class="inner_image w-[55%] mx-auto md:w-[40%] md:mx-0 lg:w-[30%] xl:w-[23%] relative rounded-2xl overflow-hidden">
<img src="${method.images[i]}" alt="${method.name}" class="w-full h-[300px] object-cover">
<div class="absolute w-[40px] h-[40px] rounded-full bg-[#00C2D7] top-[10px] left-[5px] flex justify-center items-center text-2xl text-white"><span> ${[i]} </span> </div>
</div>
    `    
}
    document.getElementById("craft_desc_images").innerHTML=show
    
}
displayAllSteps(craftDesc)


function displayToolsUsing(tool){
    cartonaa=""
    for (let x = 0; x < tool.tools.length; x++) {
        if(x%2 == 0){
cartonaa +=`<div class="rounded-2xl bg-[#00C2D7] py-2.5 px-3 lg:w-[170px] xl:w-[200px] text-center text-white text-2xl">${tool.tools[x]}</div>`
        }else{
            cartonaa +=`<div class="rounded-2xl bg-[#EE4F31] py-2.5 px-3 lg:w-[170px] xl:w-[200px] text-center text-white text-2xl">${tool.tools[x]}</div>`
        }
        
    }
document.getElementById("tools").innerHTML=cartonaa
}
displayToolsUsing(craftDesc)


function showVideo(audio){
document.getElementById("craft_video").innerHTML=`<iframe width="560" height="315" src="${audio.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="w-full"></iframe>`
}
showVideo(craftDesc)
var lightBox = document.getElementById('lightBox');
var arrowRight = document.getElementById('arrowRight');
var arrowLeft = document.getElementById('arrowLeft');
var lightBoxImg = document.getElementById('lightBoxImg');
var BoxImg = document.getElementById('BoxImg');
var closeIcon = document.getElementById('closeIcon');
var imgList = Array.from(document.querySelectorAll('.inner_image img'));
var currentIndex;
var isOpen = false;

BoxImg.addEventListener('click', function (e) { e.stopPropagation(); })
lightBox.addEventListener('click', hideSlider)
document.addEventListener('keydown', function (e) {
    if (isOpen) {
        if (e.key == 'ArrowRight') getNextImg()
        if (e.key == 'ArrowLeft') getPrevImg()
        if (e.key == 'Escape') hideSlider()
    }
})
arrowRight.addEventListener('click', getNextImg)
arrowLeft.addEventListener('click', getPrevImg)
closeIcon.addEventListener('click', hideSlider)

// نربط الصور بالـ click بعد ما اتعرضت
for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('click', showSlider)
}

function showSlider(e) {
    isOpen = true;
    var img = e.target;
    currentIndex = imgList.indexOf(img);
    var src = img.getAttribute('src');
    lightBoxImg.style.backgroundImage = `url(${src})`
    lightBox.classList.replace('hidden', 'flex')
}

function hideSlider() {
    isOpen = false;
    lightBox.classList.replace('flex', 'hidden')
}

function getNextImg() {
        currentIndex += 1;
    if (currentIndex == imgList.length) {
        currentIndex = 0;
    }
    var img = craftDesc.im[currentIndex];
    var src = img.getAttribute('src');
    BoxImg.setAttribute('src', src);
}

function getPrevImg() {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = imgList.length - 1;
    }
    var img = imgList[currentIndex];
    var src = img.getAttribute('src');
    lightBoxImg.style.backgroundImage = `url(${src})`
}