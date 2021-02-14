
function validateContactForm() {
    let firstName = document.forms['form']['firstname'].value;
    let lastName = document.forms['form']['lastname'].value;
    let textArea = document.forms['form']['textarea'].value;
    if (firstName == '') {
        alert('First name must be filled out');
    } else if (lastName == '') {
        alert('Last name must be filled out');
    } else if (textArea == '') {
        alert('Type a message in the message box.');
    }
}

