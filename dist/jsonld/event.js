import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setLocation } from '../utils/schema/setLocation';
import { setPerformer } from '../utils/schema/setPerformer';
import { setOffers } from '../utils/schema/setOffers';
import { setAggregateOffer } from '../utils/schema/setAggregateOffer';
import { setOrganizer } from '../utils/schema/setOrganizer';
function EventJsonLd({ type = 'Event', keyOverride, location, images, offers, aggregateOffer, performers, organizer, eventStatus, eventAttendanceMode, ...rest }) {
    const data = {
        ...rest,
        location: setLocation(location),
        image: images,
        offers: offers ? setOffers(offers) : setAggregateOffer(aggregateOffer),
        performer: Array.isArray(performers)
            ? performers.map(setPerformer)
            : setPerformer(performers),
        organizer: Array.isArray(organizer)
            ? organizer.map(setOrganizer)
            : setOrganizer(organizer),
        eventStatus: eventStatus ? `https://schema.org/${eventStatus}` : undefined,
        eventAttendanceMode: eventAttendanceMode
            ? `https://schema.org/${eventAttendanceMode}`
            : undefined,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "Event" }));
}
export default EventJsonLd;
