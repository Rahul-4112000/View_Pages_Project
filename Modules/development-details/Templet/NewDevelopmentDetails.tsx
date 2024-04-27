import HeroContainer from '@/Shared/Components/HeroContainer/HeroContainer';
import Image from 'next/image';
import Enquiry from '@/public/enquiry.svg';
import CallUs from '@/public/callus.svg';
import Link from 'next/link';
import Amenities from '@/Modules/development-details/components/Amenities';
import Article from '@/Modules/development-details/components/Article';
import InsightDetails from '@/Modules/development-details/components/InsightDetails';
import ResidenceForSale from '@/Modules/development-details/components/ResidenceForSale';
import PropertyDetail from '@/Modules/development-details/components/PropertyDetail';
import { IDevelopmentDetail } from '../development-details.interface';
import { staticImageLoader } from '@/Shared/services/loader';
import LocationSection from '../components/LocationSection';

const NewDevelopmentDetails = ({ props }: { props: IDevelopmentDetail }) => {
  const { address, displaySuite, properties } = props;

  const fullAddress =
    address.thoroughfareNumber +
    ' ' +
    address.thoroughfare +
    ', ' +
    address.area +
    ', ' +
    address.state +
    ' ' +
    address.postalCode;

  const shortAddress =
    displaySuite.address.thoroughfareNumber +
    ' ' +
    displaySuite.address.thoroughfare +
    ', ' +
    displaySuite.address.area +
    ', ' +
    displaySuite.address.shortenState +
    ' ' +
    displaySuite.address.postalCode;

  const renderEnquiryButton = () => {
    return (
      <button
        type='button'
        className='px-4 py-2 font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 active:bg-at-primary-900 rounded-lg at-btn flex items-center justify-center'
      >
        <Image alt='enquiry' src={Enquiry} />
        <span className='ml-2'>Enquire Now</span>
      </button>
    );
  };

  const renderCallUsButton = () => {
    return (
      <button
        type='button'
        className='px-4 py-2 font-bold text-black bg-white hover:border-at-dark-500 hover:bg-at-light-600 rounded-lg at-btn flex items-center justify-center border border-at-light-500'
      >
        <Image alt='call us' src={CallUs} />
        <span className='ml-2'>Call us</span>
      </button>
    );
  };

  const renderSocialMedia = () => {
    return (
      <div className='flex items-center gap-2 mt-4 lg:mt-0'>
        <Link
          href='#'
          className='cursor-pointer text-xl rounded-full bg-at-light-200 w-8 h-8 flex justify-center items-center'
        >
          <Image
            loader={staticImageLoader}
            src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/Facebook - Original.fdf42c22.svg'
            alt='facebook-icon'
            width={16}
            height={16}
          />
        </Link>
        <Link
          href='#'
          className='text-default cursor-pointer text-xl rounded-full bg-at-light-200 w-8 h-8 flex justify-center items-center'
        >
          <Image
            loader={staticImageLoader}
            src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/Twitter - Original.1663187e.svg'
            alt='twitter-icon'
            width={16}
            height={16}
          />
        </Link>
        <Link
          href='#'
          className='text-default cursor-pointer text-xl rounded-full bg-at-light-200 w-8 h-8 flex justify-center items-center'
        >
          <Image
            loader={staticImageLoader}
            src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/mail-01.90592f30.svg'
            alt='facebook-icon'
            width={16}
            height={16}
          />
        </Link>
      </div>
    );
  };

  const renderHeroContainer = () => {
    return (
      <HeroContainer title={props.title} subTitle={fullAddress} className='w-full lg:w-3/5 p-6 md:px-16 md:py-12'>
        <div className='flex flex-col mt-8 lg:flex-row justify-start  lg:justify-between lg:items-center'>
          <div className='flex gap-4'>
            {renderEnquiryButton()}
            {renderCallUsButton()}
          </div>
          {renderSocialMedia()}
        </div>
      </HeroContainer>
    );
  };

  const renderImageGallery = () => {
    return (
      <div className='w-full lg:w-2/5 h-44 lg:h-292px relative font-DmSans'>
        <img src={props.image} alt='gallery-main-image' className='rounded-lg w-full max-h-full' />
        <button className=' text-black bg-white border-at-light-500 hover:border-at-dark-500 hover:bg-at-light-600 rounded-lg at-btn flex items-center justify-center text-sm font-medium py-2 px-3 absolute top-4 right-4'>
          10 photos
        </button>
      </div>
    );
  };

  const renderAboutSection = () => {
    return (
      <section className='border-b border-at-light-500 pb-8'>
        <h3 className='font-medium text-lg'>About {props.title}</h3>
        <h2 className='text-lg font-medium mt-4 mb-2 lg:text-2xl'>{fullAddress}</h2>
        <p className='text-base font-normal text-at-dark-700 mb-2'>From ${props.priceSearch}</p>
        <Amenities
          bathRooms={props.bathrooms}
          bedRooms={props.bedrooms}
          carSpaces={props.carSpaces}
          className='mb-2 lg:mb-4'
        />
        <PropertyDetail
          propertyLocation={shortAddress}
          propertyType={props.classification}
          propertySize={props.totalProperties}
        />
      </section>
    );
  };

  const renderResidencesForSale = () => {
    return (
      <section>
        <h2 className='text-lg font-bold mb-4 mt-8'>Off-The-Plan Residences For Sale At {props.title}</h2>
        <div className='border-b border-at-light-500 pb-8 my-8'>
          {properties.map((property) => {
            const capitalizedFirstLatter = property.discr.charAt(0).toUpperCase();
            const capitalizedDiscr = capitalizedFirstLatter + property.discr.slice(1);
            return (
              <ResidenceForSale
                imgPath={property.files.thumbnail[0].url}
                altText={property.files.thumbnail[0].name}
                title={property.title}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                carSpaces={property.carSpaces}
                discr={capitalizedDiscr}
              />
            );
          })}
        </div>
      </section>
    );
  };

  const renderInsightsSection = () => {
    return (
      <section className='border-t mt-4 pt-8 lg:mt-8'>
        <h2 className='text-lg font-bold'>Insights on {address.area}</h2>
        <div className='my-10 flex flex-col gap-4'>
          <InsightDetails title={`Meet the Neighbours near ${address.area}`} />
          <InsightDetails title={`${address.area} Suburb Trends`} />
        </div>
      </section>
    );
  };

  return (
    <>
      <section className='flex flex-col lg:flex-row gap-4 mb-8'>
        {renderHeroContainer()}
        {renderImageGallery()}
      </section>
      <div className='w-full lg:w-8/12 font-DmSans'>
        {renderAboutSection()}
        <Article articles={props.description.textProfile} />
        {renderResidencesForSale()}
        <LocationSection title={props.title} fullAddress={fullAddress} shortAddress={shortAddress} />
        {renderInsightsSection()}
      </div>
    </>
  );
};

export default NewDevelopmentDetails;
