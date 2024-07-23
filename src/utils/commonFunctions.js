import { DateTime } from 'luxon';
// ---------------------------- Common Utils

export const getAgoTimeStrings = (timestampInSeconds) => {
    const now = DateTime.local();
    const targetTime = DateTime.local().minus({ seconds: timestampInSeconds });

    const duration = now.diff(targetTime);

    const secondsAgo = duration.as('seconds');
    const minutesAgo = duration.as('minutes');
    const hoursAgo = duration.as('hours');
    const daysAgo = duration.as('days');
    const monthsAgo = duration.as('months');
    const yearsAgo = duration.as('years');

    if (secondsAgo < 60) {
        return `${Math.floor(secondsAgo)}s ago`;
    } else if (minutesAgo < 60) {
        return `${Math.floor(minutesAgo)}m ago`;
    } else if (hoursAgo < 24) {
        return `${Math.floor(hoursAgo)}h ago`;
    } else if (daysAgo < 30) {
        return `${Math.floor(daysAgo)}d ago`;
    } else if (monthsAgo < 12) {
        return `${Math.floor(monthsAgo)}mon ago`;
    } else {
        return `${Math.floor(yearsAgo)}y ago`;
    }
};
