function scrollToForm() {
  document.getElementById('test-drive').scrollIntoView({ behavior: 'smooth' });
}

const form = document.getElementById('testDriveForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.querySelector("input[placeholder='Full Name']").value;
  const email = form.querySelector("input[placeholder='Email Address']").value;
  const phone = form.querySelector("input[placeholder='Phone Number']").value;
  const date = form.querySelector("input[type='date']").value;
  const city = form.querySelector("select").value;

  if (!name || !email || !phone || !date || !city) {
    alert("Please fill out all fields!");
    return;
  }

  alert(`Thank you, ${name}! Your test drive in ${city} has been booked for ${date}.`);
  form.reset();
});
// Contact Form Submission (Demo)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! Our support team will get back to you shortly.');
  this.reset();
});
