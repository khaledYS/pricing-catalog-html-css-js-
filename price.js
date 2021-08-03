const toggler = document.querySelectorAll('.fst > .show-more')


//  here i choose every toggler
// and give it a functiallity
toggler.forEach(element => {
    element.onclick = e=>{
        // here i include the price tag into a var
        const price = element.parentElement.parentElement.parentElement.parentElement;
        price.classList.contains('active') ? price.classList.remove('active') : price.classList.add('active')

        // here i make a listener if the mouse goes out the price div or tag 
        price.onmouseleave = e=>{
            price.classList.remove('active')
        }
    }
});