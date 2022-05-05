type Props = {
  name: string;
  className?: string;
  register?: any;
  errors?: any;
  label?: string;
  options: { value: string; text: string }[];
  disabled?: boolean;
  disabledMessage?: string;
  containerStyles?: string;
  onMouseUp?: () => void;
};

const Select: React.FC<Props> = ({
  label,
  register = {},
  name,
  errors,
  options,
  disabled,
  disabledMessage,
  containerStyles = "w-full mt-3",
  onMouseUp,
}) => {
  return (
    <div className={containerStyles}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-5 text-gray-700 mb-2 mr-2 sm:mt-px sm:pt-2"
        >
          {label}
        </label>
      )}
      <div className="rounded-md shadow-sm">
        <select
          id={name}
          disabled={disabled}
          onMouseUp={onMouseUp}
          className={`block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
            disabledMessage ? "italic" : ""
          } sm:text-sm  border-2 border-gray-200 rounded-md 
            ${disabled ? "bg-gray-100" : ""}`}
          {...register}
        >
          <option value="" disabled>
            {disabledMessage || "Please Select"}
          </option>
          {options.map((e) => (
            <option key={e.value} value={e.value}>
              {e.text}
            </option>
          ))}
        </select>

        {errors && errors[name] && (
          <div className="mt-2 text-xs text-red-600">
            {errors && errors[name]?.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
