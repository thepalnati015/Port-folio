/* skills */
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(skillBar => {
        const skillBarFill = skillBar.querySelector('.skill-bar-fill');
        const skillPercent = skillBar.getAttribute('data-percent');
        skillBar.addEventListener('mouseenter', function() {
            skillBarFill.style.width = skillPercent + '%';
        });
        skillBar.addEventListener('mouseleave', function() {
            skillBarFill.style.width = '0%';
        });
    });
});

// contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Form validation or submission logic goes here
    // For example, you can log the form data to the console:
    console.log('Form submitted with the following data:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
  
    // Add your form submission code here
    alert('Form submitted successfully!');
  });

  /* NAVBAR */
function toggleNavbar() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
