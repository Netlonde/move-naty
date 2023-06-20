function useDeleteModalController() {
  function handleDelete(func: () => void, modalClosefunc: () => void) {
    func();
    modalClosefunc();
  }

  return {
    handleDelete
  };
}

export default useDeleteModalController;
