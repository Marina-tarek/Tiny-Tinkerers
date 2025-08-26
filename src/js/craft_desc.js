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
        <div class="preview inner_image w-[55%] mx-auto md:w-[40%] md:mx-0 lg:w-[30%] xl:w-[23%] relative rounded-2xl overflow-hidden">
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
cartonaa +=`<div class="rounded-2xl bg-[#00C2D7] py-2.5 px-3 lg:w-[190px] xl:w-[200px] text-center text-white text-2xl">${tool.tools[x]}</div>`
        }else{
            cartonaa +=`<div class="rounded-2xl bg-[#EE4F31] py-2.5 px-3 lg:w-[190px] xl:w-[200px] text-center text-white text-2xl">${tool.tools[x]}</div>`
        }
        
    }
document.getElementById("tools").innerHTML=cartonaa
}
displayToolsUsing(craftDesc)

function showVideo(audio){
document.getElementById("craft_video").innerHTML=`<iframe width="560" height="315" src="${audio.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="w-full"></iframe>`
}
showVideo(craftDesc)

const modal     = document.getElementById('animation-carousel');
const allSteps  = document.getElementById('all_steps');
const btnPrev   = modal.querySelector('[data-carousel-prev]');
const btnNext   = modal.querySelector('[data-carousel-next]');
const btnClose  = document.getElementById('closeCarousel');

let currentIndex = 0;
let prevBodyOverflow = '';

function renderSlide() {
  const src = craftDesc.images[currentIndex];
  allSteps.innerHTML = `
    <div class="relative w-full h-[70vh]">
      <img src="${src}" alt="${craftDesc.name} - ${currentIndex + 1}" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain">
    </div>
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs bg-black/50 rounded-full px-3 py-1">
      ${currentIndex + 1} / ${craftDesc.images.length}
    </div>
  `;
}

function openCarousel(start = 0) {
  currentIndex = start;
  renderSlide();
  modal.classList.remove('hidden');
 modal.classList.add('flex');
  prevBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
}

function closeCarousel() {
  modal.classList.add('hidden');
  document.body.style.overflow = prevBodyOverflow || '';
}

function next() {
  currentIndex = (currentIndex + 1) % craftDesc.images.length;
  renderSlide();
}

function prev() {
  currentIndex = (currentIndex - 1 + craftDesc.images.length) % craftDesc.images.length;
  renderSlide();
}


btnNext.addEventListener('click', (e) => { e.stopPropagation(); next(); });
btnPrev.addEventListener('click', (e) => { e.stopPropagation(); prev(); });
btnClose.addEventListener('click', (e) => { e.stopPropagation(); closeCarousel(); });

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeCarousel();
});

document.addEventListener('keydown', (e) => {
  if (modal.classList.contains('hidden')) return;
  if (e.key === 'ArrowRight') next();
  else if (e.key === 'ArrowLeft') prev();
  else if (e.key === 'Escape') closeCarousel();
});


document.querySelectorAll('.preview').forEach((img, index) => {
  img.addEventListener('click', () => openCarousel(index));
});
