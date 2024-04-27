import InputTextField from '@/Shared/Components/InputTextField/InputTextField';
import SelectionField from '@/Shared/Components/SelectionField/SelectionField';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import Cross from '@/public/cross.svg';
import Link from 'next/link';

interface IProp {
  title: string;
  onTogglePortal: () => void;
}

const PrivateAppointmentForm = ({ title, onTogglePortal }: IProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = () => {};

  return (
    <form
      className='border border-at-light-500 py-3.5 px-6 rounded-xl relative bg-white overflow-auto md:w-4/5 lg:w-1/2 xl:w-2/5'
      onSubmit={handleSubmit(submitData)}
    >
      <Image
        className='m-auto'
        src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg'
        alt='View-icon'
        width={100}
        height={34}
      />
      <Image src={Cross} alt='cross-icon' onClick={onTogglePortal} className='absolute top-5 right-7 cursor-pointer' />
      <h2 className=' text-center text-at-grey text-xl font-medium mt-3 mb-2'>Enquire about {title}</h2>
      <div className='grid md:grid-cols-2 md:gap-x-4'>
        <InputTextField labelName='First name' placeHolder='First name' register={register} errors={errors} />
        <InputTextField labelName='Last Name' placeHolder='Last name' register={register} errors={errors} />
        <InputTextField labelName='Email' placeHolder='Email' register={register} errors={errors} />
        <InputTextField labelName='Phone' placeHolder='Phone' register={register} errors={errors} />
        <SelectionField
          selectClassName='font-medium border-at-light-700 shadow-sm text-sm rounded-lg focus:border-at-primary focus:ring-0'
          optionClassName='text-base'
          optionList={[
            'Which describe you best?',
            'First Home Buyers',
            'Downsizers',
            'Young Family',
            'Investor',
            'Just Looking',
          ]}
        />
        <SelectionField
          selectClassName='font-medium border-at-light-700 shadow-sm text-sm rounded-lg focus:border-at-primary focus:ring-0'
          optionClassName='text-base'
          optionList={[
            'What is your price range?',
            '$500k',
            '$500k-700k',
            '$750k-$1m',
            '$1m-$1.5m',
            '$1.5m-$2m',
            '$2m-$3m',
            '$3m-$4m',
            '$4m-$5m',
            '$5m',
          ]}
        />
        <SelectionField
          selectClassName='font-medium border-at-light-700 shadow-sm text-sm rounded-lg focus:border-at-primary focus:ring-0'
          optionClassName='text-base'
          optionList={[
            'When are you looking to buy?',
            '1-3 months',
            '3-6 months',
            '6-12 months',
            '12-18 months',
            '18 months +',
          ]}
        />
      </div>
      <div className='p-1 mb-4 lg:mb-6'>
        <label className='font-medium text-sm'>Add a Message(optional)</label>
        <textarea
          rows={3}
          name='message'
          placeholder='Enquire About at Arbour Park'
          className='p-2 border rounded-lg border-at-light-700 focus-within:border-at-primary w-full outline-none ring-0 focus:ring-0 focus:outline-none'
        ></textarea>
      </div>
      <button className='px-4 py-2 w-full font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 active:bg-at-primary-900 rounded-lg at-btn flex items-center justify-center '>
        Submit enquiry
      </button>
      <p className='text-xs text-center mt-5'>
        By submitting this enquiry you are agreeing to our{' '}
        <span className='hover:text-at-primary-700 font-bold'>
          <Link href='/privacy-policy/' target='_blank'>
            Privacy Policy
          </Link>
        </span>
      </p>
    </form>
  );
};

export default PrivateAppointmentForm;
