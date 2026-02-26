import { useController } from 'react-hook-form';

const FormInput = ({ control, name, placeholder, type }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="mb-4">
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={`w-full border-b bg-transparent py-2 outline-none
        ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;