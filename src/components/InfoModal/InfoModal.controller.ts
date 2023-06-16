function useInfoModalController(
  backToLastPage: any,
  isBackToLastPage: boolean | undefined,
  closeModal: () => void
) {
  function handleCloseModal() {
    if (isBackToLastPage) {
      closeModal();
      backToLastPage();
      return;
    }
    closeModal();
  }

  return { handleCloseModal };
}

export default useInfoModalController;
