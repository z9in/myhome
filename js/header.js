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
    window.location.reload();
  }
})
