document.querySelectorAll('input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', function() {
        if (this.checked) {
            // Disable other checkboxes
            document.querySelectorAll('input[type="checkbox"]').forEach(other => {
                if (other !== this) other.disabled = true;
            });

            // Handle response
            if (this.value === 'yes') {
                alert("You said YES! 💖");
            } else {
                alert("You said NO. 😢");
            }
        } else {
            // Enable all checkboxes if none are checked
            document.querySelectorAll('input[type="checkbox"]').forEach(other => {
                other.disabled = false;
            });
        }
    });
});
