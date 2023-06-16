export interface ModalProps {
  title: string;
  isModalOpen: boolean;
  variant: string;
}

export type FormRequiredFields = {
  name?: string;
  licenseNumber?: string;
  licenseCategory: string;
  licenseExpiration: string;
};
