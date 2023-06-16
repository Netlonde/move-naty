import { Button, Typography } from "@mui/material";
import Container from "./CustomButton.style";

import CustomButtonProps from "./CustomButton.props";

export function CustomButton(props: CustomButtonProps) {
  const { onClick, text, id, isDisable } = props;
  return (
    <Container>
      <Button
        id={id}
        className="custombutton"
        onClick={onClick}
        disabled={isDisable}
      >
        <Typography className="buttontext">{text}</Typography>
      </Button>
    </Container>
  );
}
