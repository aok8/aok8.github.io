// Get modal element
var modal = document.getElementById('modal')
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0]
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', clickOutside);

//function to close modal
function closeModal(){
    modal.style.display='none';
}

//close modal if clicked outside
function clickOutside(e){
    if(e.target == modal){
        modal.style.display='none'
    }
}
