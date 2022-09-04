import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  className: string;
  type: "submit" | "button";
  isDisabled: boolean;
  actionOnclick: () => void;
}
const Button = ({
  buttonText,
  actionOnclick,
  type,
  isDisabled,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={className}
      type={type}
      disabled={isDisabled}
      onClick={() => actionOnclick()}
    >
      {buttonText}{" "}
    </ButtonStyled>
  );
};

export default Button;
