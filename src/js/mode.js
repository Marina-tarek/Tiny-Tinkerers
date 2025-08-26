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