document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll("header nav ul li a");
    menuLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = 1;
        }, index * 300);
    });
});