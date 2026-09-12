document.addEventListener('DOMContentLoaded', () => {
  const infoBtn = document.getElementById('info-btn');
  const closeModalBtn = document.getElementById('close-modal');
  const modal = document.getElementById('modal');

  infoBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});