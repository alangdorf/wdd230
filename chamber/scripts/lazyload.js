const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    } 
    img.src = src;
    img.onload = () => {
        img.removeAttribute("data-src");
    }
} 

if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => {
        imgObserver.observe(image);
    });
} else {
    images.forEach(image => {
        preloadImage(image);
    });
}