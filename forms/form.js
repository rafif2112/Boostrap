        (function(){
            emailjs.init("IZ5Vv4_eNTvf3fQA3"); // Replace with your User ID from EmailJS

            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();

                // Collect user input from the form
                var formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };

                // Send the email
                emailjs.send("service_087414a", "template_0byooxb", formData)
                    .then(function(response) {
                        console.log('Success!', response.status, response.text);
                        alert('Message sent successfully!');
                        window.location.href = "index.html"
                    }, function(error) {
                        console.log('Failed...', error);
                        alert('Message sending failed.');
                        window.location.href = "index.html"
                    });
            });

        })();