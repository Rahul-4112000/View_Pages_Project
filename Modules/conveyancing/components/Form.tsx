import React from 'react';
import InputTextField from '../../../Shared/Components/InputTextField/InputTextField';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Email from '@/public/email.svg';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const renderSelectionField = () => {
    return (
      <div className='rounded-lg border-at-light-700  focus-within:border-at-primary mb-4'>
        <label htmlFor='state' className='font-medium text-sm'>
          State<span className='text-red-at-500'>*</span>
        </label>
        <select
          {...register('state', { required: 'this is required' })}
          className='p-2 w-full outline-none border ring-0 rounded-lg focus:ring-0 focus:outline-none'
        >
          <option selected>Select your state</option>
          <option value='VIC'>VIC</option>
          <option value='NSW'>NSW</option>
          <option value='QLD'>QLD</option>
        </select>
        {/* {errors.state && <p>{errors.state.message}</p>} */}
      </div>
    );
  };

  const renderCommentField = () => {
    return (
      <div className='p-1 mb-4 lg:mb-6'>
        <label className='font-medium text-sm'>Comment or message</label>
        <textarea
          name='message'
          placeholder='Add a message'
          className='p-2 border rounded-lg border-at-light-700 focus-within:border-at-primary w-full outline-none ring-0 focus:ring-0 focus:outline-none'
        ></textarea>
      </div>
    );
  };

  const renderButton = () => {
    return (
      <button className='w-full mb-3 mx-1 px-4 py-2 font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 rounded-lg flex items-center justify-center gap-2'>
        <Image src={Email} alt='email-icon' />
        <p className='text-base font-bold'>Redeem Offer</p>
      </button>
    );
  };

  const submitData = (data: any) => {};
  return (
    <form onSubmit={handleSubmit(submitData)} className='px-3 lg:px-5'>
      <InputTextField labelName='First Name' register={register} errors={errors} />
      <InputTextField labelName='Last Name' register={register} errors={errors} />
      <InputTextField labelName='Email' register={register} errors={errors} />
      <InputTextField labelName='Phone' register={register} errors={errors} />
      {renderSelectionField()}
      {renderCommentField()}
      {renderButton()}
      <p className='text-xs font-normal px-2 text-at-dark-700 text-center'>
        By submitting your details, you acknowledge that you accept our{' '}
        <Link href='#' className='text-xs text-at-primary hover:underline hover:text-at-primary cursor-pointer'>
          Privacy Policy
        </Link>
      </p>
    </form>
  );
};

export default Form;
