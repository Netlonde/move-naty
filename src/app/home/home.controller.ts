import { useInfoModalStore, useLoadingModalStore } from "@/store";

const useHomeController = () => {
  const { handleModalOpen, isOpenInfoModal, isSuccessfully, text } =
    useInfoModalStore();

  const { isLoading } = useLoadingModalStore();

  return { handleModalOpen, isOpenInfoModal, isSuccessfully, text, isLoading };
};

export default useHomeController;
