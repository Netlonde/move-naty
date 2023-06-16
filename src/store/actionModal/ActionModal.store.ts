import create from 'zustand';
import { ActionModalProps } from './ActionModal.props';

const initialState = {
  isOpenActionModal: false,
  isLastItemOfTable: false
};

const useActionModalStore = create<ActionModalProps>((set) => ({
  ...initialState,

  handleDrawerOpen: () => set((state) => ({ isOpenActionModal: !state.isOpenActionModal })),
  handleIsLastItemOfTable: (isLastItemOfTable) => set((state) => ({ ...state, isLastItemOfTable }))
}));

export { useActionModalStore };
