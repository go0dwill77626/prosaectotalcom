        function validateNumberInput() {
            var input = document.getElementById("numberInput").value;
            if (isNaN(input) || input.trim() === "") {
                alert("Please enter a valid number.");
                return false;
            }
            return true;
        }


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);

        // Send data to SheetDB
        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.created === 1) {
                alert('Thank you! Your message has been sent.');
                form.reset();
            } else {
                alert('Oops! Something went wrong. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
