import create from 'zustand';

import { DeleteModalProps } from './DeleteModal.props';

const initialState = {
  isOpenDeleteModal: false
};

const useDeleteModalStore = create<DeleteModalProps>((set) => ({
  ...initialState,

  handleDeleteModalOpen: () => set((state) => ({ isOpenDeleteModal: !state.isOpenDeleteModal }))
}));

export { useDeleteModalStore };
