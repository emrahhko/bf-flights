/**
 * @jest-environment jsdom
 */

import { createFlights } from './createFlights.js';

describe('create a user component', () => {
    const flightsDom = createFlights({
        id: 1,
        name: 'VQ-903',
        plane: 'ATR725',
        departureDate: '2023-08-05 13:45:00',
        origin: 'DAC',
        arrivalDate: '2023-08-05 14:40:00',
        destination: 'CGP',
        stops: 0,
    });
    it('NodeName => DIV', () => {
        expect(flightsDom.nodeName).toEqual('DIV');
    });
});
