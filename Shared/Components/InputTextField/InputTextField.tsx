import React from 'react';

interface IProp {
  labelName: string;
  register: (value: string, { required }: { required: string }) => {};
  errors: any;
  placeHolder?: string;
}

const InputTextField = ({ labelName, register, errors, placeHolder }: IProp) => {
  return (
    <div className='mb-4'>
      {labelName && (
        <label htmlFor={labelName} className='ml-1 font-medium text-sm'>
          {labelName}
          <span className='text-red-at-500'>*</span>
        </label>
      )}
      <input
        {...register(labelName, { required: `${labelName} is required` })}
        type='text'
        placeholder={placeHolder ? placeHolder : ''}
        className='w-full outline-none border px-3 py-2 border-at-light-700 rounded-lg ring-0 focus:ring-0 focus:outline-none focus-within:border-at-primary'
      />
      {errors && (
        <p className='block ml-1 mt-1 text-xs text-red-500 leading-tight absolute'>{errors[labelName]?.message}</p>
      )}
    </div>
  );
};

export default InputTextField;
