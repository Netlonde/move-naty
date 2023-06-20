import { usemobileNavbarModalStore } from "@/store";

const useNavbarController = () => {
  const { handleOpenMobileNavbarModal, isOpenMobileNavbarModal } =
    usemobileNavbarModalStore();
  return { handleOpenMobileNavbarModal, isOpenMobileNavbarModal };
};

export default useNavbarController;
