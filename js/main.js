document.addEventListener('DOMContentLoaded', function() {
    // This function ensures the code within runs after the DOM is fully loaded
    
    // Handling the click event for the Explore Portfolio button
    const exploreBtn = document.querySelector('.btn');
    exploreBtn.addEventListener('click', function(event) {
        event.preventDefault();
        // Perform actions when the Explore Portfolio button is clicked
        
        // For example, scroll smoothly to the portfolio section
        const portfolioSection = document.getElementById('portfolio');
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Add more functionalities or event listeners here as needed
    // For instance, handling other interactions or events on the website
});
