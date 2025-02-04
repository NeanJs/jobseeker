interface btnProps {
  text: String;
  isPrimary?: Boolean;
  className?: String;
  onClick?: Function | Event | any;
  isSubmit?: Boolean;
  disabled?: Boolean;
}

function Button({
  text,
  isSubmit,
  isPrimary,
  className,
  onClick,
  disabled,
}: btnProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      disabled={Boolean(disabled)}
      type={isSubmit && "submit"}
      className={`px-4 py-2 text-prime text-sm ease duration-300 border-2 border-prime rounded   ${
        isPrimary
          ? `text-white bg-prime hover:text-prime hover:bg-white`
          : `hover:bg-prime hover:text-white`
      }  ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
