export function setOffer(offer) {
    function setPriceSpecification(priceSpecification) {
        if (priceSpecification) {
            return {
                '@type': priceSpecification.type,
                priceCurrency: priceSpecification.priceCurrency,
                price: priceSpecification.price,
            };
        }
        return undefined;
    }
    function setItemOffered(itemOffered) {
        if (itemOffered) {
            return {
                ...itemOffered,
                '@type': 'Service',
            };
        }
        return undefined;
    }
    if (offer) {
        return {
            ...offer,
            '@type': 'Offer',
            priceSpecification: setPriceSpecification(offer.priceSpecification),
            itemOffered: setItemOffered(offer.itemOffered),
        };
    }
    return undefined;
}
