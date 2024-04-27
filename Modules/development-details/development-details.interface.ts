export interface IDevelopmentDetail {
  id: string;
  title: string;
  status: string;
  featuredWeight: number;
  discr: string;
  updatedAt: string;
  totalProperties: number;
  classification: string;
  projectTypes: string;
  priceSearch: string;
  priceDisplay: number;
  bedrooms: string;
  bathrooms: string;
  carSpaces: string;
  address: IAddress;
  properties: IProperties[];
  image: string;
  displaySuite: {
    address: IAddress;
  };
  details: IDetails;
  locationMapImgURL: string;
  description: IDescription;
}

interface IAddress {
  id: string;
  latitude: string;
  longitude: string;
  country: string;
  state: string;
  shortenState: string;
  area: string;
  thoroughfare: string;
  thoroughfareNumber: string;
  postalCode: string;
  region: string | null;
  buildingName: string | null;
  slug: string;
  updatedAt: string;
}

interface IProperties {
  id: string;
  title: string;
  priceDisplay: string;
  price: string;
  priceFrom: string;
  priceTo: string;
  bedrooms: string;
  bathrooms: string;
  carSpaces: string;
  livingAreas: string;
  discr: string;
  frontage: string | null;
  depth: string | null;
  levels: string | null;
  aspect: string | null;
  areaTotal: number;
  areaExternal: number | null;
  areaInternal: number | null;
  createdAt: string;
  useFloorPlan: number;
  isHidden: number;
  files: {
    thumbnail: IThumbnailFile[];
  };
  description: IDescription;
}

interface IThumbnailFile {
  id: string;
  type: string;
  location: string;
  name: string;
  textAlternative: string | null;
  size: number;
  url: string;
  position: number;
  createdAt: string;
  updatedAt: string;
}

interface IAddress {
  id: string;
  latitude: string;
  longitude: string;
  country: string;
  state: string;
  shortenState: string;
  area: string;
  thoroughfare: string;
  thoroughfareNumber: string;
  postalCode: string;
  region: string | null;
  buildingName: string | null;
  slug: string;
  updatedAt: string;
}

interface IDescription {
  textListing: string;
  textProfile: string;
  textTransactional: string | null;
}

interface IDetails {
  items: number;
  levels: number;
  completionDate: string;
  bedroomOptions: string;
  stampDuty: string | null;
  corporateFees: string | null;
  phone: string;
  email: string[];
  enquiryConfig: { video_enquiry: string; general_enquiry: string };
}
