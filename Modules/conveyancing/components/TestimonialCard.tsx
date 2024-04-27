import { ICard } from '../conveyancing.interface';
import Image from 'next/image';
import Star from '@/public/night.svg';
import ArrowAccordion from '@/Shared/Components/ArrowAccordion/ArrowAccordion';
import { ImageLoaderProps } from 'next/image';
import DownArrow from '@/public/downArrow.svg';

const TestimonialCard = ({ rating, duration, description, name }: ICard) => {
  const ratingList = new Array(rating).fill('');

  const staticImageLoader = ({ src }: ImageLoaderProps): string => {
    return src;
  };
  return (
    <div className='bg-white border shadow-sm rounded-xl h-fit p-4 flex-1'>
      {/* <img src={Star.src} width='50' height='30' /> */}
      <div className='flex justify-between mb-4'>
        {rating && (
          <div className='flex items-center'>
            {ratingList.map((index) => {
              return <Image key={index} src={DownArrow} alt='star-icon' />;
            })}
          </div>
        )}

        {duration && <p className='text-xs font-normal text-at-dark-700'>{duration}</p>}
      </div>
      <ArrowAccordion defaultHeight='75'>
        <p>{description}</p>
      </ArrowAccordion>
      <p className='text-sm font-bold mt-4'>{name}</p>
    </div>
  );
};

export default TestimonialCard;
