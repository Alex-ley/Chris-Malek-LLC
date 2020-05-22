const inputs = document.querySelectorAll('.input-field > input, .input-field > textarea');

inputs.forEach(input => {
    input.addEventListener('focus', inputFocus);
    input.addEventListener('blur', inputBlur);
})

function inputFocus(e) {
    //console.log(e.target)
    const input = e.target;
    if (!input.classList.contains('has-data')){
        input.classList.toggle("has-data");
    }
}
function inputBlur(e) {
    //console.log(e.target)
    const input = e.target;
    console.log(input.value.length)
    if (!input.value.length > 0){
        input.classList.toggle("has-data");
    }
}