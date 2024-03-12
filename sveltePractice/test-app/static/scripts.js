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
  