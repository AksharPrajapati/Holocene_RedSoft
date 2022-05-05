interface Props {
  children?: React.ReactNode;
  color?: string;
  textcolor?: string;
  onClick?: () => void;
  className?: String;
  disabled?: boolean;
}
const Button: React.FC<Props> = ({
  children,
  color,
  textcolor,
  className = "",
  disabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center ${disabled ? "opacity-70" : ""} px-4 py-2 border-2 border-${textcolor} rounded-md shadow-sm text-sm font-medium text-${textcolor} bg-${color} hover:${color} focus:outline-none ${className} `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
Button.defaultProps = {
  color: "indigo-600",
  textcolor: "white",
};
