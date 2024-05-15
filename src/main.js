const modal_btn =document.getElementById("modal-btn");
const modal =document.getElementById("modal");
const close_modal =document.getElementById("close-modal");


//open modal
modal_btn.onclick = (e)=>{
    modal.style.opacity=1;
    modal.style.pointerEvents="auto";
}

//close modal
close_modal.onclick = (e)=>{
    modal.style.opacity=0;
    modal.style.pointerEvents="none";
}