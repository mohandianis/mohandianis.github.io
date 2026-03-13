// script.js
// Basic interactivity for the personal website

// Wait until the DOM is fully loaded before attaching event handlers
window.addEventListener('DOMContentLoaded', () => {
    const viewResumeBtn = document.getElementById('view-resume');
    const modal = document.getElementById('resume-modal');
    const closeBtn = modal.querySelector('.close');

    // Open the modal when the "View My Resume" button is clicked
    viewResumeBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close the modal when the "x" is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks anywhere outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
