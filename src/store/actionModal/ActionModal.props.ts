export interface ActionModalProps {
  isOpenActionModal: boolean;
  isLastItemOfTable: boolean;
  handleDrawerOpen: () => void;
  handleIsLastItemOfTable: (isLastItemOfTable: boolean) => void;
}
