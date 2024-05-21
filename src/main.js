const modal_btn =document.getElementById("modal-btn");
const modal =document.getElementById("modal");
const keep =document.getElementById("keep");
const discard =document.getElementById("discard");
const close_modal =document.querySelector(".modal .close-modal");
const alertCloseModal =document.querySelector(".alert .close");
const alert =document.querySelector(".alert");


//open modal
modal_btn.onclick = (e)=>{
    modal.style.opacity=1;
    modal.style.pointerEvents="auto";
}

//close modal
close_modal.onclick = (e)=>{
    modal.style.opacity=1;
    modal.style.pointerEvents="none";
    alert.style.display="flex";
    
}
alertCloseModal.onclick = (e)=>{
    modal.style.opacity=1;
    modal.style.pointerEvents="auto";
    alert.style.display="none";
    
}
keep.onclick = (e)=>{
    modal.style.opacity=1;
    modal.style.pointerEvents="auto";
    alert.style.display="none";
    
}
discard.onclick = (e)=>{
  
    modal.style.opacity=0;
    modal.style.pointerEvents="none";
    alert.style.display="none";
    
   
    
}


