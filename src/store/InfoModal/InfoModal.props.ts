export interface InfoModalProps {
  isOpenInfoModal: boolean;
  isSuccessfully: boolean;
  text: string;
  handleModalOpen: () => void;
  handleSetIsSuccessfully: (isSuccessfully: boolean) => void;
  handleSetText: (text: string) => void;
}
