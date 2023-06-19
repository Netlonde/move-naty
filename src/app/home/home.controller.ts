import { useInfoModalStore } from "@/store";

const useHomeController = () => {
  const { handleModalOpen, isOpenInfoModal, isSuccessfully, text } =
    useInfoModalStore();

  return { handleModalOpen, isOpenInfoModal, isSuccessfully, text };
};

export default useHomeController;
