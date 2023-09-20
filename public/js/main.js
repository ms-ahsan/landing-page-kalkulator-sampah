AOS.init();

// Swiper js
const swiper = new Swiper('.my-swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Sticku navbar condition
window.addEventListener('scroll', function () {
  const navbarItem = document.getElementById('stickyItem');
  if (window.innerWidth < 769) {
    return;
  }
  if (window.scrollY >= 90) {
    navbarItem.classList.remove('hidden');
  } else {
    navbarItem.classList.add('hidden');
  }
});

// Modal function
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const closeModal2 = document.getElementById('closeModal2');

  if (window.innerWidth > 768) {
    return;
  }

  modal.classList.remove('hidden');

  closeModal.addEventListener('click', function () {
    modal.classList.add('hidden');
  });
  closeModal2.addEventListener('click', function () {
    modal.classList.add('hidden');
  });
});
