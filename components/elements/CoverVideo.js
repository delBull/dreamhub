if (typeof window !== 'undefined') {
  try {
    const modal = document.querySelector("#modal");
    const openModal = document.querySelector(".open-button");
    const closeModal = document.querySelector(".close-button");

    openModal.addEventListener("click", () => {
      modal.showModal();
    });

    closeModal.addEventListener("click", () => {
      modal.close();
    });
  } catch (error) {
    console.error("Error en la lógica de inicialización del modal:", error);
  }
}

