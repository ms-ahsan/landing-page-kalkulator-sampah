// Swiper js
const swiper = new Swiper('.my-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Sticku navbar condition
window.addEventListener('scroll', function () {
  const navbarItem = document.getElementById('stickyItem');

  // Jika pengguna scroll lebih dari 100px, tampilkan item
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
