document.querySelectorAll('.custom-checkbox').forEach(checkbox => {
  // Toggle function
  const toggleCheckbox = () => {
    const isChecked = checkbox.getAttribute('aria-checked') === 'true';
    checkbox.setAttribute('aria-checked', !isChecked);
  };

  // Toggle on click
  checkbox.addEventListener('click', toggleCheckbox);
});