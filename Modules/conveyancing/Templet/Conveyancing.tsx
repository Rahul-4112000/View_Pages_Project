import HeroContainer from '@/Shared/Components/HeroContainer/HeroContainer';
import Image from 'next/image';
import Form from '@/Modules/conveyancing/components/Form';
import Link from 'next/link';
import Accordion from '@/Shared/Components/Accordion/Accordion';
import TestimonialCard from '@/Modules/conveyancing/components/TestimonialCard';
import { ACCORDION, TESTIMONIALS } from '@/Modules/conveyancing/conveyancing.constant';
import { staticImageLoader } from '@/Shared/services/loader';

const Conveyancing = () => {
  const renderYoutubeVideo = () => {
    return (
      <section className='mb-8 h-198 lg:mb-4 lg:h-446 lg:w-3/5'>
        <iframe
          className=' bg-at-dark-900 rounded-xl'
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/SklG0T_W0ao?si=p4MZcWpPexGb97Nm'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </section>
    );
  };

  const renderForm = () => {
    return (
      <section className='pb-6 rounded-xl lg:w-38% border border-at-light-500 font-DmSans lg:absolute lg:top-0 lg:right-0'>
        <p className='text-sm font-bold m-6'>
          Enter your details for your $220 conveyancing voucher and a free contract review
        </p>
        <Form />
      </section>
    );
  };

  const renderArticle = () => {
    return (
      <section className='mb-8 lg:mb-16 text-base font-normal font-DmSans lg:w-3/5'>
        <p className='mb-4'>
          In partnership with view.com.au,{' '}
          <Link href='#' className='hover:text-at-primary underline'>
            Settle Easy
          </Link>{' '}
          is currently offering new customers a $220 conveyancing voucher on their trusted{' '}
          <Link href='#' className='hover:text-at-primary underline'>
            online conveyancing services
          </Link>{' '}
          and a free contract review. You'll only pay $880 incl. GST plus disbursements on a standard conveyancing
          transaction. Redeem today and use within 12 months.
        </p>
        <p className='mb-4'>
          Settle Easy provides reliable, secure, fast and hassle-free conveyancing services to help you buy or sell
          property.
        </p>
        <p className='mb-4'>
          Think of Settle Easy as a legal expert in your corner. Someone to guide you through the process and to provide
          you with a seamless experience in the lead up to settlement.
        </p>
        <p className='mb-4'>
          Alongside the $220 conveyancing voucher, you will also be eligible for a free contract review during your
          conveyancing transaction, knowing no surprises are waiting.
        </p>
        <p className='mb-4'>
          Simply fill out the form and a member from the Settle Easy Success Specialist team will get in touch within 24
          hours.
        </p>
        <p className='mb-4'>
          This offer is eligible for customers transacting in Victoria, New South Wales and Queensland.
        </p>
      </section>
    );
  };

  const renderFAQ = () => {
    return (
      <section className='lg:w-3/5 font-DmSans pb-8 xl:pb-12'>
        <h2 className='text-base font-bold undefined mb-4 lg:mb-6 '>Frequently Asked Questions</h2>
        {ACCORDION.map((accordionData) => {
          return (
            <Accordion key={accordionData.title} title={accordionData.title} description={accordionData.description} />
          );
        })}
      </section>
    );
  };

  const renderTestimonial = () => {
    return (
      <div className='max-w-screen-xl mx-auto bg-at-light-200 rounded-md lg:rounded-xl mb-8 lg:mb-14 py-6 lg:p-10'>
        <h2 className='text-base font-bold undefined mx-4 lg:mx-0 mb-4 lg:text-2xl lg:mb-6 '>
          What Settle Easy customers are saying...
        </h2>
        <div className='flex gap-4 flex-col lg:flex-row  px-4 lg:px-0'>
          {TESTIMONIALS.map((testimonial) => {
            return (
              <TestimonialCard
                rating={testimonial.rating}
                duration={testimonial.duration}
                description={testimonial.description}
                name={testimonial.name}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <section>
        <HeroContainer
          title='Buying or selling?'
          subTitle='Redeem your $220 conveyancing voucher and free contract review'
          className='relative pt-24 mb-8 p-6 md:px-16 md:py-12'
        >
          <Image
            loader={staticImageLoader}
            src='https://view.com.au/viewstatic/lancer/_next/static/media/settle-easy.53aca56e.svg'
            alt='settle_easy'
            width={120}
            height={120}
            className='absolute w-14 h-14 top-6 md:w-24 md:h-24 md:right-15 md:top-12 lg:w-30 lg:h-30'
          />
        </HeroContainer>
      </section>
      <div className='relative'>
        {renderYoutubeVideo()}
        {renderForm()}
      </div>
      {renderArticle()}
      {renderFAQ()}
      {renderTestimonial()}
    </>
  );
};

export default Conveyancing;
