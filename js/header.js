let headerEl = document.getElementsByClassName("header")[0];

headerEl.innerHTML = `
<header>
<h1><a href="./index.html"><img src="./images/logoB.svg" alt="logo"></a></h1>
<nav>
    <ul class="depth1">
        <li><a href="./index.html">HOME</a></li>
        <li><a href="./about.htm">ABOUT</a></li>
        <li class="nav_works"><a href="./works.html">WORKS</a>
        </li>
    </ul>
</nav>   
<img id="nav_open" src="./images/icon _menu_.svg" alt="menu">
</header>`;

let navEl = document.getElementsByTagName("nav")[0];
let toggle = document.getElementById("nav_open");

toggle.addEventListener("click", () => {
  if (navEl.style.display == "flex") {
    navEl.style.display = "none";
  } else {
    navEl.style.display = "flex";
  }
});

let pdfDown = document.getElementById('pdf');

pdfDown.addEventListener('click',(e)=>{
    if (window.confirm("다운로드하시겠습니까?")) {
  } else {
    e.preventDefault();
    window.location.reload("./index.html");
  }
})
