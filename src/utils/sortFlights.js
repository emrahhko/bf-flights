/**
 * Sorts the flights from the earliest to the latest (earliest first, latest last).
 *
 * @param {object} data - The data.
 * @returns {Array} - Arranged flights.
 */

export const sortFlights = (data) => {
    const scheduleFlights = data.flights.sort((a, b) => {
        return new Date(a.departureDate) - new Date(b.departureDate);
    });
    return scheduleFlights;
};
