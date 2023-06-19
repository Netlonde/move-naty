import create from "zustand";
import { mobileNavbarModalProps } from "./mobileNavbarModal.props";

const initialState = {
  isOpenMobileNavbarModal: false,
};

const usemobileNavbarModalStore = create<mobileNavbarModalProps>((set) => ({
  ...initialState,

  handleOpenMobileNavbarModal: () =>
    set((state) => ({
      isOpenMobileNavbarModal: !state.isOpenMobileNavbarModal,
    })),
}));

export { usemobileNavbarModalStore };
