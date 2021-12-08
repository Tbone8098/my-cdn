var allModalBtn = document.querySelectorAll('.modal-btn')
for (let btn of allModalBtn) {
    btn.addEventListener('click', function(){
        wrapperOn()
        let modalName = this.getAttribute('modal')
        toggleModal(modalName)

        parent = getModal(this)
        if (parent){
            toggleModal(parent.id)
        }
    })
}

var allModalCloseBtns = document.querySelectorAll('.my-modal-close')
for (let btn of allModalCloseBtns) {
    btn.addEventListener('click', function(){
        parent = getModal(this)
        toggleModal(parent.id)
        wrapperOff()
    })
}

function toggleModal(modalName, type='block'){
    let modal = document.querySelector(`#${modalName}`)
    
    let modalStatus = modal.style.display
    if (modalStatus === 'none'){
        modal.style.display = type
    } else {
        modal.style.display = 'none'
    }
}

function getModal(item){
    if (!item){
        return false
    }
    if (item.classList.contains('my-modal')){
        return item
    }
    return getModal(item.parentElement)
}

function wrapperOn(){
    let wrapper = document.querySelector('.my-modal-wrapper')
    wrapper.style.display = 'flex'
}

function wrapperOff(){
    let wrapper = document.querySelector('.my-modal-wrapper')
    wrapper.style.display = 'none'
}