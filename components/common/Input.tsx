type Props = {
  name: string;
  className?: string;
  register?: any;
  errors?: any;
  label?: string;
  onKeyUp?: any;
  typeOfInputfield?: any;
  placeholder?: string;
  disabled?: boolean;
};

const Input: React.FC<Props> = ({
  label,
  register = {},
  name,
  errors,
  typeOfInputfield,
  onKeyUp,
  placeholder,
  disabled = false,
}) => {
  return (
    <div className="w-full mt-3">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-5 text-gray-700 mb-2 sm:mt-px sm:pt-2"
        >
          {label}
        </label>
      )}
      <div className="rounded-md shadow-sm">
        <input
          id={name}
          name={name}
          type={typeOfInputfield}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
          disabled={disabled}
          className={`block w-full px-3 py-2 ${
            disabled ? "bg-gray-100" : ""
          } placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5`}
          {...register}
        />
        {errors && errors[name] && (
          <div className="mt-2 text-xs text-red-600">
            {errors && errors[name]?.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
