const form = document.querySelector('.rating-form');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const selectedRating = document.querySelector('#selected-rating');
const formMessage = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const rating = form.querySelector('input[name="rating"]:checked');

  if (!rating) {
    formMessage.textContent = 'Please select a rating before submitting.';
    return;
  }

  selectedRating.textContent = rating.value;
  ratingCard.hidden = true;
  thankYouCard.hidden = false;
});

form.addEventListener('change', () => {
  formMessage.textContent = '';
});
