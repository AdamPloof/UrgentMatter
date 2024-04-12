import { ICONS } from "./paths";

export const MODE = {
    STD: 'std',
    DEMO: 'demo',
};

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
    {name: 'JBergeron', img: 'jbergeron.jpg', alt: 'John agent image'},
    {name: 'JSeinfeld', img: 'jerry.jpg', alt: 'Jerry agent image'},
    {name: 'GConstanza', img: 'george.jpg', alt: 'George agent image'},
    {name: 'CKramer', img: 'kramer.jpg', alt: 'Kramer agent image'},
    {name: 'EBenis', img: 'elaine.jpg', alt: 'Elaine agent image'},
    {name: 'Unassigned', img: 'unassigned.svg', alt: 'Unassigned agent image'},
];

export const REQUEST_TYPES = [
    'Stopped at coffee station',
    'Jumped in the hallway',
    'Phone call to personal phone',
    'Unsolicited person email',
    'Shouted from across parking lot',
    'Submitted via portal... JK!',
    'Called cell phone at 5:00am',
    'Semi-coherent grunt'
];

export const PRODUCT_CATEGORIES = [
    'Printer corpse',
    'Some junk from the 80s',
    'Sharepoint, always Sharepoint',
    'SMS is dead, long live SMS',
    'Microwave oven',
    'M720Q... we still have these??',
    'Elevator buttons',
    'Email or something',
    'Server',
    'It\'s probably phishing',
    'Excel',
    'Mainframe'
];

export const OPERATIONAL_CATEGORIES = [
    'Not my problem',
    'They could\'ve just googled it',
    'Is down',
    'Forgot password and own name',
    'Security lol',
    'Busted again',
    'Need to sell on Ebay',
    'Euthanization required',
    'Make this do what it obviously can\'t',
    'Make this do what it already does'
];

export const ALTERNATE_REALITY_TICKETS = [
    "Hey IT Crew, I'm having an issue with my [insert specific application name and version here]. The problem I've been having is [describes problem in appropriate detail]. \r\n I've tried [the following well thought out troubleshooting steps] but that didn't seem to work. \r\n Do you have any other suggestions for what I might try next? If needed I can be available for an on-site visit. I realize you have limited time so here is my availability [lists open schedule times] and other ways you can reach me [phone, email, that stuff].\r\n Thank you! \r\n [Sensible person]",
    "Hi there, I just wanted to keep you informed that we encountered the [specific problem] today. Fortunately, we were able to fix it ourselves by [describes reasonable solution]. Just thought you might like to know for your records, thanks!",
    "Hello, I was about to submit a ticket regarding [specific issue] but found some well written documentionat that described exactly what I was looking for. I had to take the time to actually read it but I fonud the experience enriching. Anyway, just wanted to say thanks for the useful info!",
    "Kid: Hey Kevvinnnnnn\r\nKid2: How do we play this game\r\nGiJoe17: I'm glad you guys skipped class today, we're having fun aren't we?\r\nKid: I wan't to play video games\r\nGiJoe17: We had a good conversation ahahaha I don't understand, you, You're the ringleader ov she va dava dala WWOOOOOO adowava a didda and go and get in there howahahahhwa you get back to school you understand owavahhwa you get back into school you understadn awaahehuhyouhavenobusinessinherehuhwaa *breaths*\r\nKid3: Hey Wa what's going on what the hell?\r\nKid: I wan't to get in the fridge too.",
];

export const COMMENTS = [
    'Is this thing done yet?',
    'Thank you!',
    'I did\'t read the last thing you said, can you say it again?',
    'Still a problem.',
    'Nope.',
    'Still can\'t DT or SE',
    'I already tried that',
    'Yes, I turned it off and back on again.',
    'I don\'t know what that is or where it plugs into or even who I am',
    '1:30\'s no good for me how about never? Is never good for you?',
    'I\'ll be at my desk in 30 minutes. If you need to reach me you can wait there patiently until then',
    'It\'s broken again',
    'Do you have any spares while I wait?',
    'What kinda deals can you get on these things?',
    'My car also just died, are you good with those too?',
    'Sorry, phone was out, and email down, and I don\'t like to read. so...',
    'Hey kid! I\'m a computer!',
    'Stop all the downloadin',
    'forgot to mention, I spilled some french fries in this thing too',
    'This elevator only goes to the third floor. And someone made an awful mess down there'
];
