import create from "zustand";

import { LoadingModalProps } from "./LoadingModal.props";

const initialState = {
  isLoading: false,
};

const useLoadingModalStore = create<LoadingModalProps>((set) => ({
  ...initialState,

  handleSetIsLoading: (isLoading) => set((state) => ({ ...state, isLoading })),
}));

export { useLoadingModalStore };
