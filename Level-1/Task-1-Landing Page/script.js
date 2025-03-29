// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// CyberZone Terminal Welcome Message
console.log('%cWelcome to CyberZone!', 'color: #0ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 5px #0ff, 0 0 10px #0ff;');

console.log('%cThe future of gaming is here.', 'color: #fff; font-size: 16px; text-shadow: 0 0 5px #fff;');

console.log('%c🚀 Are you ready to enter the game?', 'color: #ff00ff; font-size: 14px; font-style: italic;');

// Fun ASCII Art for Cyberpunk Vibes
console.log(`
███████╗██╗   ██╗██████╗ ███████╗███████╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██║   ██║██╔══██╗██╔════╝██╔════╝██╔═══██╗████╗  ██║██╔════╝
███████╗██║   ██║██████╔╝█████╗  █████╗  ██║   ██║██╔██╗ ██║███████╗
╚════██║██║   ██║██╔═══╝ ██╔══╝  ██╔══╝  ██║   ██║██║╚██╗██║╚════██║
███████║╚██████╔╝██║     ███████╗██║     ╚██████╔╝██║ ╚████║███████║
╚══════╝ ╚═════╝ ╚═╝     ╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝
`);

console.log('%c👾 Stay tuned for more!', 'color: #0ff; font-size: 12px; font-weight: bold; text-shadow: 0 0 5px #0ff;');
