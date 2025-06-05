// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden"); // is-hidden відповідає за видимість
//     refs.modal.classList.toggle("is-open"); // is-open показує вікно як у B7
//   }
// })();

(() => {
  // ======= MODAL =======
  const modalRefs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (modalRefs.openModalBtn && modalRefs.closeModalBtn && modalRefs.modal) {
    modalRefs.openModalBtn.addEventListener("click", toggleModal);
    modalRefs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      modalRefs.modal.classList.toggle("is-hidden");
      modalRefs.modal.classList.toggle("is-open");
    }
  }

  // ======= MOBILE MENU =======
  const menuRefs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    mobileMenu: document.querySelector("[data-menu]"),
    menuLinks: document.querySelectorAll(".menu-nav-link"),
  };

  if (menuRefs.openMenuBtn && menuRefs.closeMenuBtn && menuRefs.mobileMenu) {
    menuRefs.openMenuBtn.addEventListener("click", toggleMenu);
    menuRefs.closeMenuBtn.addEventListener("click", toggleMenu);

    // Закриття меню при кліку на посилання
    menuRefs.menuLinks.forEach((link) =>
      link.addEventListener("click", () => {
        menuRefs.mobileMenu.classList.add("is-hidden");
        menuRefs.mobileMenu.classList.remove("is-open");
      })
    );

    function toggleMenu() {
      menuRefs.mobileMenu.classList.toggle("is-hidden");
      menuRefs.mobileMenu.classList.toggle("is-open");
    }
  }
})();
