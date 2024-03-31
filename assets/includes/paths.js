const origin = process.env.ORIGIN;
const base = process.env.BASE_URL;
export const FETCH_TICKET = origin + base + 'service-board/fetch';
export const FETCH_TICKETS = origin + base + 'service-board/fetch-all';
export const GENERATE_TICKETS = origin + base + 'service-board/generate';
