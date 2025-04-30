// Change text content
document.getElementById('change-text-btn').addEventListener('click', () => {
    document.getElementById('description').textContent = "You've just updated the text dynamically!";
  });
  
  // Change background color
  document.getElementById('change-style-btn').addEventListener('click', () => {
    document.body.style.backgroundColor = "#e3f2fd";
  });
  
  // Toggle element visibility
  document.getElementById('toggle-element-btn').addEventListener('click', () => {
    const element = document.getElementById('extra-element');
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
  });
  
  // Handle form
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
  });
  