interface ActionModalOneData {
  ButtonsText: string;
  OnClick: () => void;
}

export interface ActionModalProps {
  ActionModalData: ActionModalOneData[];
  ButtonsIcon: JSX.Element[];
}
