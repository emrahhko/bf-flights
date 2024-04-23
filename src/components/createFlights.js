/**
 * Create a dom element.
 *
 * @param {object} flights - Flight object.
 * @returns {HTMLElement} - Flight element.
 */

export const createFlights = (flights) => {
    const flightsDom = document.createElement('div');
    flightsDom.className = 'flights';

    const name = document.createElement('div');
    name.className = 'name';
    name.innerText = flights.name;

    const plane = document.createElement('div');
    plane.className = 'plane';
    plane.innerText = flights.plane;

    const departureDate = document.createElement('div');
    departureDate.className = 'departureDate';
    departureDate.innerText = flights.departureDate;

    const origin = document.createElement('div');
    origin.className = 'origin';
    origin.innerText = flights.origin;

    const arrivalDate = document.createElement('div');
    arrivalDate.className = 'arrivalDate';
    arrivalDate.innerText = flights.arrivalDate;

    const destination = document.createElement('div');
    destination.className = 'destination';
    destination.innerText = flights.destination;

    const stops = document.createElement('div');
    stops.className = 'stops';
    stops.innerText = flights.stops;

    flightsDom.append(
        name,
        plane,
        departureDate,
        origin,
        arrivalDate,
        destination,
        stops,
    );

    return flightsDom;
};
