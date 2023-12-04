import EmblaCarousel from 'embla-carousel';
import { createEmblaCarouselAutoHeight } from 'embla-carousel-auto-height';

const TeamDrawerCarousel = () => {
  const selector = '#team-drawer-carousel .embla__viewport';
  const options = {
    loop: false,
    align: 'start',
  };

  const carouselNode = document.querySelector(selector);
  const carousel = EmblaCarousel(carouselNode, options);

  // Initialize the Auto Height plugin
  const autoHeight = createEmblaCarouselAutoHeight(carousel);

  // Assuming the carousel has an ID of 'team-drawer-carousel'
  const carouselId = 'team-drawer-carousel';

  // Select the buttons using the carousel ID
  const prevButton = document.querySelector(`#${carouselId} #team-drawer-prev`);
  const nextButton = document.querySelector(`#${carouselId} #team-drawer-next`);

  // Function to update button styles
  const updateButtonStyles = () => {
    if (prevButton && nextButton) {
      prevButton.classList.toggle('is-disabled', !carousel.canScrollPrev());
      nextButton.classList.toggle('is-disabled', !carousel.canScrollNext());
    }
  };

  // Add event listeners to the buttons
  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      carousel.scrollPrev();
      updateButtonStyles();
    });
    nextButton.addEventListener('click', () => {
      carousel.scrollNext();
      updateButtonStyles();
    });
  }

  // Update button styles when the carousel's scroll position changes
  carousel.on('scroll', () => {
    updateButtonStyles();
    autoHeight.update(); // Update the auto height
  });

  // Update button styles initially
  updateButtonStyles();
  autoHeight.update(); // Update the auto height initially

  // Add any additional behavior here
};

export default TeamDrawerCarousel;
