 const themeToggle = document.getElementById("dark-mode-toggle");

 if (localStorage.getItem("theme") === "dark") {
   document.body.classList.add("dark-mode");
 }
 
 themeToggle.addEventListener("click", () => {
   document.body.classList.toggle("dark-mode");
  
   if (document.body.classList.contains("dark-mode")) {
     localStorage.setItem("theme", "dark");
   } else {
     localStorage.setItem("theme", "light");
   }
   
   document.body.style.transition = "background 0.5s ease, color 0.5s ease";
 });
 
 document.querySelectorAll("nav ul li a").forEach((anchor) => {
   anchor.addEventListener("click", function (e) {
     e.preventDefault();
     const targetSection = document.querySelector(this.getAttribute("href"));
 
     if (targetSection) {
       window.scrollTo({
         top: targetSection.offsetTop - 30, 
         behavior: "smooth",
       });
     }
   });
 });
 

 const yearElement = document.getElementById("year");
 if (yearElement) {
   yearElement.textContent = new Date().getFullYear();
 }