document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('animate-in-view');
        }
    });
});

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const direction = entry.target.getAttribute('data-slide');
                entry.target.classList.add(direction === 'right' ? 'slide-from-right' : 'slide-from-left');
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    // Observe all image containers
    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('.image-container');
        images.forEach(image => observer.observe(image));
    });
    
    function scrollToForm() {
        document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
    }
    
    function selectPlan(planName) {
        const subjectField = document.getElementById('subject-field');
        subjectField.value = 'Plan: ' + planName;
        scrollToForm();
        subjectField.focus();
    }

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
// Testimonials Data
const testimonials = [
    {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        date: "Mar 16, 2020",
        content: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        name: "Sarah Johnson",
        role: "CEO",
        date: "Apr 10, 2021",
        content: "I-StartUp has completely transformed our coworking space. The booking system is seamless, and the analytics tools are incredibly insightful.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        name: "David Smith",
        role: "Operations Manager",
        date: "Jun 5, 2022",
        content: "The member management tools have made our operations so much smoother. Highly recommend I-StartUp to anyone running a coworking space.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
];

// Function to generate testimonial HTML
function generateTestimonial(testimonial) {
    return `
        <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
                <time datetime="${testimonial.date}" class="text-gray-400">${testimonial.date}</time>
                <a href="#" class="relative z-10 rounded-full bg-gray-700 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-600">Marketing</a>
            </div>
            <div class="relative mt-8 flex items-start gap-x-4">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="h-12 w-12 rounded-full bg-gray-700 flex-shrink-0">
                <div class="flex-1">
                    <svg class="w-6 h-6 text-yellow-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    <p class="text-gray-300 italic">“${testimonial.content}”</p>
                    <div class="mt-4">
                        <p class="font-semibold text-white">${testimonial.name}</p>
                        <p class="text-gray-400 text-sm">${testimonial.role}</p>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// Insert testimonials into the container
const testimonialsContainer = document.getElementById('testimonials-container');
testimonials.forEach(testimonial => {
    testimonialsContainer.innerHTML += generateTestimonial(testimonial);
});