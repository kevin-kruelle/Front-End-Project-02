
function validateContactForm() {
    let x = document.forms['form']['firstname'].value;
    let j = document.forms['form']['lastname'].value;
    let y = document.forms['form']['textarea'].value;
    if (x == '') {
        alert('First name must be filled out');
        return false;
    } else if (j == '') {
        alert('Last name must be filled out');
        return false;
    } else if (y == '') {
        alert('Type a message in the message box.');
        return false;
    }
}

