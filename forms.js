const inputs = document.querySelectorAll('.input-field > input, .input-field > textarea');
const textAreas = document.querySelectorAll('.input-field > textarea');
const sectionMain = document.querySelector('section.section-main');
const inputPhone = document.getElementById('icon_phone');

// inputPhone.setCustomValidity('enter a phone number in the form "123 123 1234" in the US or "+1234567891011" if international');
inputPhone.addEventListener('input', () => {
    inputPhone.setCustomValidity('');
    inputPhone.checkValidity();
  });
  
  inputPhone.addEventListener('invalid', () => {
    inputPhone.setCustomValidity('enter a phone number in the form "123 123 1234" in the US or "+1234567891011" if international');
  });

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

var ro = new ResizeObserver( entries => {
    for (let entry of entries) {
      let cs = window.getComputedStyle(entry.target);
    //   console.log('watching element:', entry.target);
    //   console.log(entry.contentRect.top,' is ', cs.paddingTop);
    //   console.log(entry.contentRect.left,' is ', cs.paddingLeft);
    //   console.log(entry.borderBoxSize[0].inlineSize,' is ', cs.width);
    //   console.log(entry.borderBoxSize[0].blockSize,' is ', cs.height);
      if (entry.target.handleResize)
          entry.target.handleResize(entry);
    }
  });

textAreas.forEach(textArea => {
    let cs = window.getComputedStyle(textArea);
    let h = parseInt(cs.height);
    console.log(h)
    textArea.handleResize = el => {console.log('diff', parseInt(el.target.style.height) - h); sectionMain.style.marginBottom = parseInt(el.target.style.height) - h + "px";};
    ro.observe(textArea);
})
