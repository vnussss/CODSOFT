// Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("CyberZone Landing Page Loaded!");

    // Hover effect for game cards
    let games = document.querySelectorAll(".game");
    games.forEach(game => {
        game.addEventListener("mouseover", () => {
            game.style.boxShadow = "0 0 20px cyan";
        });
        game.addEventListener("mouseleave", () => {
            game.style.boxShadow = "none";
        });
    });
});
