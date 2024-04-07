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
        proportionPosStart: .0,
        proportionPosEnd: .25,
    },
    FORGOTTEN: {
        description: 'Forgotten',
        className: 'status-stage-1',
        transition: 'Forget',
        proportionPosStart: .25,
        proportionPosEnd: .5,
    },
    IN_PURGATORY: {
        description: 'In Purgatory',
        className: 'status-stage-2',
        transition: 'Purgatorize',
        proportionPosStart: .5,
        proportionPosEnd: .65,
    },
    WAITING_ON_USER: {
        description: 'Waiting on user lol',
        className: 'status-stage-2',
        transition: 'Wait on user',
        proportionPosStart: .65,
        proportionPosEnd: .8,
    },
    IN_PROGRESS: {
        description: 'Git \'r dun',
        className: 'status-stage-2',
        transition: 'Start',
        proportionPosStart: .8,
        proportionPosEnd: .9,
    },
    PENDING: {
        description: 'Pending cancel',
        className: 'status-stage-3',
        transition: 'Prepare to cancel',
        proportionPosStart: .9,
        proportionPosEnd: 1.0,
    },
    COMPLETE: {
        description: 'Over it',
        className: 'status-stage-4',
        transition: 'Done',
        proportionPosStart: NaN,
        proportionPosEnd: NaN,
    },
    CANCELLED: {
        description: 'Not gonna do it',
        className: 'status-stage-5',
        transition: 'Cancel',
        proportionPosStart: NaN,
        proportionPosEnd: NaN,
    },
};

export const TICKET_SLA = {
    ON_TARGET: {
        description: 'Stay on target',
        className: 'sla sla-on-target',
        icon: `${ICONS}/sla_on_target.svg`
    },
    IN_DANGER: {
        description: 'In danger',
        className: 'sla sla-warning',
        icon: `${ICONS}/sla_warning.svg`
    },
    BREACHED: {
        description: 'Breached',
        className: 'sla sla-danger',
        icon: `${ICONS}/sla_danger.svg`
    }
};

export const URGENCY_MAP = {
    'Utterly inconsequential' : `${ICONS}/urgency_inconsequential.svg`,
    'Urgent' : `${ICONS}/urgency_urgent.svg`,
    'Really urgent' : `${ICONS}/urgency_really.svg`,
    'Extremely urgent' : `${ICONS}/urgency_extreme.svg`,
    'Ludicriously urgent' : `${ICONS}/urgency_ludicrious.svg`,
    'Absolutely freakin\' nuclear critically urgent' : `${ICONS}/urgency_nuclear.svg`,
    'HAAAAAAALLLLLLPPPPPP!!!!' : `${ICONS}/urgency_halp.svg`,
};

export const AGENT_AVATARS = [
    {name: 'JBergeron', img: 'jerry.jpg', alt: 'Jerry agent image'},
    {name: 'GConstanza', img: 'george.jpg', alt: 'George agent image'},
    {name: 'CKramer', img: 'kramer.jpg', alt: 'Kramer agent image'},
    {name: 'EBenis', img: 'elaine.jpg', alt: 'Elaine agent image'},
    {name: 'Unassigned', img: 'unassigned.svg', alt: 'Unassigned agent image'},
];
