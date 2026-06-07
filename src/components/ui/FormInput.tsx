import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps  {

label: string;
  placeholder: string;
  type?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;

}

const FormInput=({
    label,
    placeholder,
    type = "text",
    registration,
    error,
}:FormInputProps )=> {
  return (
    <div className="flex flex-col gap-2 w-full mt-3">
      <label className="text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className="
          h-12 border border-transparent rounded-sm
          py-3.5 px-4 bg-(--color-surface-highest)
          placeholder:text-[#737685]
          placeholder:text-[16px]
          placeholder:font-normal
        "
      />

      {error && (
        <p className="text-[#C3C6D6] text-[11px]">
          {error.message}
        </p>
      )}
    </div>
  );
};
 


export default FormInput