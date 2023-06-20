export interface ModalProps {
  title: string;
  isModalOpen: boolean;
  variant: string;
  cleanData(): void;
}

export type FormRequiredFields = {
  finalMileage: string;
  endDisplacement: string;
  hasObservation: string;
};
