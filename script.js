const modal = document.querySelector(".the-modal");
const activate = document.querySelector(".activate");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-the-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

activate.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);