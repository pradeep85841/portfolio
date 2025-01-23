document.addEventListener("DOMContentLoaded", function () {
    // Example: Smooth scrolling for anchor links
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
