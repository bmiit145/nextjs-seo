export function setOffers(offers) {
    function mapOffer({ seller, ...rest }) {
        return {
            ...rest,
            '@type': 'Offer',
            ...(seller && {
                seller: {
                    '@type': 'Organization',
                    name: seller.name,
                },
            }),
        };
    }
    if (Array.isArray(offers)) {
        return offers.map(mapOffer);
    }
    else if (offers) {
        return mapOffer(offers);
    }
    return undefined;
}
