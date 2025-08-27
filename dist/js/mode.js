const html = document.documentElement;

let mode = JSON.parse(localStorage.getItem('color'));
if (mode) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

function change(){
  console.log("done");
  let color = html.classList.toggle("dark");
  localStorage.setItem('color', JSON.stringify(color));
}

// scroll to top 
        var toTopBtn = document.getElementById("toTopBtn");
        window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    };
    
    toTopBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };