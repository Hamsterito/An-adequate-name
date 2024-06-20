document.addEventListener('DOMContentLoaded', function() {
    const recommendationForm = document.getElementById('recommendation-form');
    const recommendationsContainer = document.querySelector('.recommendations');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closeButton = document.querySelector('.close');
    const okButton = document.getElementById('ok-button');

    recommendationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get input values
        const title = document.getElementById('new-recommendation-title').value;
        const text = document.getElementById('new-recommendation-text').value;

        // Validate input
        if (!title.trim() || !text.trim()) {
            alert('Please enter both title and text for the recommendation.');
            return;
        }

        // Create recommendation element
        const recommendationDiv = document.createElement('div');
        recommendationDiv.classList.add('recommendation');
        recommendationDiv.innerHTML = `
            <h2>${title}</h2>
            <p>${text}</p>
        `;

        // Add recommendation to container
        recommendationsContainer.appendChild(recommendationDiv);

        // Show popup
        popup.style.display = 'flex';

        // Clear form inputs
        document.getElementById('new-recommendation-title').value = '';
        document.getElementById('new-recommendation-text').value = '';
    });

    // Close popup when close button or OK button is clicked
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    okButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});

