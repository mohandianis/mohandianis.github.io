// script.js
// RPG Portfolio interactivity

// Wait until the DOM is fully loaded before attaching event handlers
window.addEventListener('DOMContentLoaded', () => {
    const viewInventoryBtn = document.getElementById('view-inventory');
    const viewQuestLogBtn = document.getElementById('view-quest-log');
    const modal = document.getElementById('resume-modal');
    const closeBtn = modal.querySelector('.close');

    // Open the modal when "View Inventory (Resume)" is clicked
    viewInventoryBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Scroll to Quest Log when "View Quest Log" is clicked
    viewQuestLogBtn.addEventListener('click', () => {
        const questLogSection = document.getElementById('quest-log');
        questLogSection.scrollIntoView({ behavior: 'smooth' });
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
