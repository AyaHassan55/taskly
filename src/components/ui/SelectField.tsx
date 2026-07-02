import type { SelectHTMLAttributes, ReactNode } from 'react';
import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form';

type SelectFieldProps<TFieldValues extends FieldValues = FieldValues> = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'defaultValue' | 'name'
> &
  UseControllerProps<TFieldValues> & {
    label?: string;
    helperText?: string;
    required?: boolean;
    children: ReactNode;
  };

function SelectField<TFieldValues extends FieldValues = FieldValues>(
  props: SelectFieldProps<TFieldValues>
) {
  const { field, fieldState } = useController(props);

  const { label, helperText, required, children, className, ...restHtmlProps } =
    props;

  return (
    <div className="w-full ">
      {label && (
        <div className="flex items-center gap-1 mb-2">
          <label className="block text-[11px] text-[#434654] font-bold tracking-[1.1px] leading-4  ">
            {label}
          </label>
          {required && <span className="text-[#ba1a1a] text-sm">*</span>}
        </div>
      )}

      <select
        {...field}
        {...restHtmlProps}
        className={`w-full  p-3 rounded-sm  outline-none cursor-pointer ${
          fieldState.error ? 'bg-[#ffdad6]' : 'bg-[#d7e2ff]'
        } ${!field.value ? 'text-[#737685]' : 'text-[#04183c]'} ${className || ''}`}
      >
        {children}
      </select>

      {fieldState.error && (
        <p className="text-[#ba1a1a] text-[14px] leading-5 font-500 mt-1">
          {fieldState.error.message}
        </p>
      )}

      {helperText && !fieldState.error && (
        <p className="text-[#c3c6d6] text-[14px] leading-5 font-500 mt-1">{helperText}</p>
      )}
    </div>
  );
}

export default SelectField;