var allClickableURL = document.querySelectorAll('.clickable-url')
for (let btn of allClickableURL) {
    btn.addEventListener('click', function(){
        let url = this.getAttribute('url')
        relocate(url)
    })
}

function relocate(url){
    window.location.href = url
}


var hiddenEls = document.querySelectorAll('.hidden-parent')
for (let parent of hiddenEls) {
    parent.addEventListener('mouseenter', function(){
        hiddenElOff(parent.children[1])
        hiddenElOn(parent.children[0])
    })
    parent.addEventListener('mouseleave', function(){
        hiddenElOn(parent.children[1])
        hiddenElOff(parent.children[0])
    })
}

function hiddenElOn(el){
    el.classList.add('hidden')
}

function hiddenElOff(el){
    el.classList.remove('hidden')
}