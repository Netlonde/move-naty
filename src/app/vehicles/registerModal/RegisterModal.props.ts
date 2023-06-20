export interface ModalProps {
  title: string;
  isModalOpen: boolean;
  variant: string;
  cleanData(): void;
}

export type FormRequiredFields = {
  licensePlate: string;
  brandModel: string;
  manufacturingYear: string;
  currentMileage: string;
};
