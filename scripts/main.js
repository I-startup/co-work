document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('animate-in-view');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const featureDescriptions = document.querySelectorAll(".text-gray-300.text-lg.leading-relaxed");

    featureDescriptions.forEach(description => {
        const text = description.textContent;
        if (text.length > 100) { // Adjust the character limit as needed
            const truncatedText = text.slice(0, 100) + "...";
            description.textContent = truncatedText;

            const showMoreButton = document.createElement("button");
            showMoreButton.textContent = "Show More";
            showMoreButton.className = "text-yellow-500 font-semibold mt-2 block";

            showMoreButton.addEventListener("click", () => {
                if (description.textContent === truncatedText) {
                    description.textContent = text;
                    showMoreButton.textContent = "Show Less";
                } else {
                    description.textContent = truncatedText;
                    showMoreButton.textContent = "Show More";
                }
            });

            description.parentNode.insertBefore(showMoreButton, description.nextSibling);
        }
    });
});