import { ICONS } from "./paths";

export const TICKET_TYPES = {
    CRYO_CHAMBER: {
        altText: 'Ticket type: cryo chamber',
        src: ICONS + '/tt_cryo_chamber.svg'
    },
    ROBOT: {
        altText: 'Ticket type: robot',
        src: ICONS + '/tt_robot.svg'
    },
    MONKEY: {
        altText: 'Ticket type: monkey',
        src: ICONS + '/tt_monkey.svg'
    },
};

// TODO: other properties of status will be color or class
// for styling, maybe order they should appear in list?
export const TICKET_STATUS = {
    IGNORED: {
        description: 'Ignored',
        className: 'status-stage-1',
        transition: 'Ignore',
    },
    FORGOTTEN: {
        description: 'Forgotten',
        className: 'status-stage-1',
        transition: 'Forget',
    },
    IN_PURGATORY: {
        description: 'In Purgatory',
        className: 'status-stage-2',
        transition: 'Purgatorize',
    },
    WAITING_ON_USER: {
        description: 'Waiting on user lol',
        className: 'status-stage-2',
        transition: 'Wait on user',
    },
    IN_PROGRESS: {
        description: 'Git \'r dun',
        className: 'status-stage-2',
        transition: 'Start',
    },
    PENDING: {
        description: 'Pending cancel',
        className: 'status-stage-3',
        transition: 'Prepare to cancel',
    },
    COMPLETE: {
        description: 'Over it',
        className: 'status-stage-4',
        transition: 'Done',
    },
    CANCELLED: {
        description: 'Not gonna do it',
        className: 'status-stage-5',
        transition: 'Cancel',
    },
};

export const TICKET_SLA = {
    ON_TARGET: {
        description: 'On target... stay on target',
    },
    BREACHED: {
        description: 'Breached'
    }
};
