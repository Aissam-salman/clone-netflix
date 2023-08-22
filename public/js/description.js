const modalContainer = document.querySelector('.container_modal');
const triggers = document.querySelectorAll('.triggers');

triggers.forEach((trigger) => trigger.addEventListener('click', toggleModal));

function toggleModal() {
    modalContainer.classList.toggle('active');
}

