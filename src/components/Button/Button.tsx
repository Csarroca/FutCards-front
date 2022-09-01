interface ButtonProps {
  buttonText: string;
  className: string;
  type: "submit" | "button";
  actionOnclick: () => void;
}
const Button = ({
  buttonText,
  actionOnclick,
  type,
  className: classNameTypeButton,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNameTypeButton}
      type={type}
      onClick={() => actionOnclick()}
    >
      {buttonText}{" "}
    </button>
  );
};

export default Button;
