function toggleAccordion(e) {
    const allAccordionItems = document.querySelectorAll('.accordion-item button');
    const clickedItem = e.currentTarget;
    const isExpanded = clickedItem.getAttribute('aria-expanded') === 'true';
  
    // Iterate through all accordion items
    allAccordionItems.forEach(item => {
      const content = item.nextElementSibling; // The accordion-content div for each item
      if (item !== clickedItem) {
        // Collapse all items except the clicked one
        item.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
        content.style.opacity = '0';
        content.style.marginBottom = '0';
      } else {
        // Toggle the clicked item
        item.setAttribute('aria-expanded', String(!isExpanded));
        content.style.maxHeight = isExpanded ? null : content.scrollHeight + "px";
        content.style.opacity = isExpanded ? '0' : '1';
        content.style.marginBottom = isExpanded ? '0' : '20px';
      }
    });
  }

  

//  Dark Light mode SWITCH
// Variable to hold the checkbox element
let checkbox;

// Variable to hold the current theme mode
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

document.addEventListener('DOMContentLoaded', function() {
  // Now checkbox is assigned here and is accessible globally
  checkbox = document.querySelector('#lightmode');
  getTheme(); // Call getTheme here to ensure DOM is loaded
});


function getTheme() {

// Store the theme mode in local storage
localStorage.setItem('isDarkMode', isDarkMode);
if (isDarkMode) {
  // Apply dark theme
  checkbox.checked = true;
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
} else {
  // Apply light theme
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');
}

}
// Function to toggle the theme
function toggleTheme() {
    // Toggle the theme mode
    isDarkMode = !isDarkMode;

    getTheme();
}




  