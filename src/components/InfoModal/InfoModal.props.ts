export interface InfoModalProps {
  text: string;
  onClick: () => void;
  isSuccessfully: boolean;
  isBackToLastPage?: boolean;
  backToLastPage?: () => void;
}
