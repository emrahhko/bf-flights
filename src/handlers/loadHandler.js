import { data } from '../data.js';
import dom from '../dom.js';
import { sortFlights } from '../utils/sortFlights.js';
import { createFlights } from '../components/createFlights.js';

export const loadHandler = () => {
    const scheduleFlights = sortFlights(data);
    scheduleFlights.forEach((flights) => {
        const flightsDom = createFlights(flights);
        dom.boss.appendChild(flightsDom);
    });
};
