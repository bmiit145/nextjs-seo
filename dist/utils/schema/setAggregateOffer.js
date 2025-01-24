import { setOffers } from './setOffers';
export function setAggregateOffer(aggregateOffer) {
    if (aggregateOffer) {
        return {
            '@type': 'AggregateOffer',
            priceCurrency: aggregateOffer.priceCurrency,
            highPrice: aggregateOffer.highPrice,
            lowPrice: aggregateOffer.lowPrice,
            offerCount: aggregateOffer.offerCount,
            offers: setOffers(aggregateOffer.offers),
        };
    }
    return undefined;
}
