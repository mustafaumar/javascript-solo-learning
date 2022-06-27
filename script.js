const modal = document.querySelector('.modal')
const btsOpenModal = document.querySelector('.show-modal')
const btsCloseModal =document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')


const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
const openModal = function(){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')  
}
btsOpenModal.addEventListener('click', openModal);
btsCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){


    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal()
    }
})

