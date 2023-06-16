import create from 'zustand';

import { InfoModalProps } from './InfoModal.props';

const initialState = {
  isOpenInfoModal: false,
  isSuccessfully: false,
  text: ''
};

const useInfoModalStore = create<InfoModalProps>((set) => ({
  ...initialState,

  handleModalOpen: () => set((state) => ({ isOpenInfoModal: !state.isOpenInfoModal })),
  handleSetIsSuccessfully: (isSuccessfully) => set((state) => ({ ...state, isSuccessfully })),
  handleSetText: (text) => set((state) => ({ ...state, text }))
}));

export { useInfoModalStore };
