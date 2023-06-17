export interface ModalProps {
  title: string;
  isModalOpen: boolean;
  variant: string;
  cleanData(): void;
}

export type FormRequiredFields = {
  name: string;
  documentNumber: string;
  documentType: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  uf: string;
};
