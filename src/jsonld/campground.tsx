import React from 'react';
import { JsonLd, JsonLdProps } from './jsonld';
import {
  Address,
  AggregateRating,
  AmenityFeature,
  Geo,
  OpeningHoursSpecification,
} from '../types';
import { setGeo } from '../utils/schema/setGeo';
import { setAddress } from '../utils/schema/setAddress';
import { setOpeningHours } from '../utils/schema/setOpeningHours';
import { setAmenityFeature } from '../utils/schema/setAmenityFeature';
import { setAggregateRating } from '../utils/schema/setAggregateRating';

export interface CampgroundJsonLdProps extends JsonLdProps {
  address: Address | Address[];
  amenityFeature?: AmenityFeature | AmenityFeature[];
  description: string;
  geo?: Geo;
  images?: string[];
  isAccessibleForFree?: boolean;
  name: string;
  openingHours?: OpeningHoursSpecification | OpeningHoursSpecification[];
  petsAllowed?: boolean;
  priceRange?: string;
  rating?: AggregateRating;
  telephone?: string;
  type?: string;
  url?: string;
}

function CampgroundJsonLd({
  address,
  geo,
  images,
  keyOverride,
  openingHours,
  type = 'Campground',
  amenityFeature,
  rating,
  ...rest
}: CampgroundJsonLdProps) {
  const data = {
    image: images,
    openingHoursSpecification: Array.isArray(openingHours)
      ? openingHours.map(setOpeningHours)
      : setOpeningHours(openingHours),
    address: setAddress(address),
    geo: setGeo(geo),
    amenityFeature: setAmenityFeature(amenityFeature),
    aggregateRating: setAggregateRating(rating),
    ...rest,
  };
  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="campground"
    />
  );
}

export default CampgroundJsonLd;
