const scriptURL = 'https://script.google.com/macros/s/AKfycbyjyFPNRegllUH5kPowtFFIGbOHJi58hnBEvNJMhKnxaLx364GH1s9IeTmQVjD4-7BL/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg');
    const submitButton = document.getElementById('submitButton');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
    
        // Show "Submitting..." on the submit button and disable it
        submitButton.innerHTML = 'Submitting';
        submitButton.disabled = true;
        submitButton.classList.add('submitting-button'); // Add the blue styling class
    
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    msg.innerHTML = 'Message sent successfully!!';
                    setTimeout(function(){
                            msg.innerHTML=""
                    },1000);
                    form.reset();
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                msg.innerHTML = 'An error occurred while submitting.';
            })
            .finally(() => {
                // Revert the button text and enable it after the response
                submitButton.innerHTML = 'Submit';
                submitButton.disabled = false;
                submitButton.classList.remove('submitting-button'); // Remove the violet styling class
            });
    });