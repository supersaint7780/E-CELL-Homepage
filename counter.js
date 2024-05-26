function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Callback for Intersection Observer
function startAnimation(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const obj = entry.target;
            const startValue = parseInt(obj.textContent, 10);
            const endValue = parseInt(obj.getAttribute('data-end-value'), 10);
            const duration = 3000; // You can adjust the duration as needed
            animateValue(obj, startValue, endValue, duration);
            observer.unobserve(obj);
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(startAnimation, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1 // Adjust the threshold as needed
});

// Observe the elements
const counterElements = document.querySelectorAll(".counter");
counterElements.forEach((element) => {
    observer.observe(element);
});


