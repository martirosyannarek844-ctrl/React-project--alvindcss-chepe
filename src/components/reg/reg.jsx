import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { inputs, texts } from './data/data';
import FormInput from './comp/useControler/useControler';
import { schema } from './comp/yup/yup';

const Register = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-green-400">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[380px] rounded-xl bg-white p-6 shadow-lg"
      >
        <h2 className="mb-6 text-center text-xl font-semibold text-blue-600">
          {texts.title}
        </h2>

        {inputs.map((input) => (
          <FormInput
            key={input.name}
            control={control}
            {...input}
          />
        ))}

        <label className="mb-4 flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" />
          {texts.terms}
        </label>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 transition"
        >
          {texts.button}
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          {texts.footer}
        </p>
      </form>
    </div>
  );
};

export default Register;