document.addEventListener('DOMContentLoaded', () => {
  const accordionBtns = document.querySelectorAll('.accordion-btn');

  accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

      // Close all open sections
      document.querySelectorAll('.accordion-content').forEach(item => {
        item.style.maxHeight = null;
      });
      document.querySelectorAll('.accordion-btn span').forEach(icon => {
        icon.textContent = '+';
      });

      // Toggle clicked section
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        btn.querySelector('span').textContent = '−';
      }
    });
  });
});