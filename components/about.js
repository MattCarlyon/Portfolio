const square1 = document.getElementById('square1');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

square1.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
