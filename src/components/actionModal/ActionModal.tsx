import { Box, Button } from '@mui/material';
import { ActionModalProps } from './ActionModal.props';
import Container from './ActionModal.style';
import { useActionModalStore } from '../../store';

export function ActionModal(props: ActionModalProps) {
  const { ActionModalData, ButtonsIcon } = props;
  const { isLastItemOfTable } = useActionModalStore();

  return (
    <Container
      style={{ top: isLastItemOfTable ? '-55px' : '20px' }}
      onlyChild={ActionModalData.length === 1}>
      {ActionModalData.map((item, index) => (
        <Box
          className={
            index + 1 === ActionModalData.length ? 'buttonContainer lastItem' : 'buttonContainer'
          }
          key={item.ButtonsText}
          id={item.ButtonsText}>
          <Button onClick={item.OnClick}>
            {ButtonsIcon[index]}
            {item.ButtonsText}
          </Button>
        </Box>
      ))}
    </Container>
  );
}
