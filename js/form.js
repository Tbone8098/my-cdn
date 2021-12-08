var allForms = document.querySelectorAll('.my-form')
for (let form of allForms) {
    form.addEventListener('submit', function(e){
        e.preventDefault()
        submitForm(this)
    })
}

function submitForm(form){
    let myForm = new FormData(form)
    let url = form.getAttribute('url')

    fetch(url, {
        method: 'post',
        body: myForm
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        if (data['status'] === 400){
            if (data['errors']){
                displayErrors(data['errors'])
            }
        } else if (data['status'] === 200) {
            if (data['url']){
                relocate(data['url'])
            }
            if (data['modal']){
                toggleModal(data['modal'])
                wrapperOff()
            }
        }
    })
}

function displayErrors(errors){
    for (const error in errors) {
        let el = document.querySelector(`#${error}`)

        if (el !== null){

            for (let child of el.parentElement.children) {
                if (child.classList.contains('error')){
                    child.remove()
                }
            }
            el.parentElement.innerHTML += `
            <p class="error">${errors[error]}</p>
            `
        }
    }
}

