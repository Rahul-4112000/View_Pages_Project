import React from 'react';
interface IProp {
  label?: string;
  optionList: string[];
  register?: (value: string, { required }: { required: string }) => {};
  errors?: any;
  className?: string;
  labelClassName?: string;
  selectClassName?: string;
  optionClassName?: string;
}

const SelectionField = ({
  label,
  optionList,
  register,
  errors,
  className,
  labelClassName,
  selectClassName,
  optionClassName,
}: IProp) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor='state' className={`font-medium text-sm ${labelClassName}`}>
          {label}
          <span className='text-red-at-500'>*</span>
        </label>
      )}
      <select
        {...(register && { ...register('state', { required: 'this is required' }) })}
        className={`p-2 w-full outline-none border ring-0 rounded-lg focus:ring-0 focus:outline-none ${selectClassName}`}
      >
        {optionList.map((optionName, index) => {
          return (
            <option className={optionClassName} {...(index === 0 && { selected: true })}>
              {optionName}
            </option>
          );
        })}
      </select>
      {/* {errors && <p>{errors.state.message}</p>} */}
    </div>
  );
};

export default SelectionField;
