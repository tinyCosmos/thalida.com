export interface TimeGroups {
    name: string;
    label: string;
    beginAt: number;
    color: string;
    salutation: string;
    sayings: string[];
}

export const timeGroups: TimeGroups[] = [
    {
        "name": "nightowl",
        "label": "Night Owl",
        "beginAt": 0,
        "color": "#323C64",
        "salutation": "Greetings",
        "sayings": [
            "Woah a Nightowl!",
            "Working late?",
            "Can’t sleep?",
            "Whatcha watching lately?",
            "Burning the night oil?",
            "Night shift?",
            "Bored?"
        ]
    },
    {
        "name": "earlybird",
        "label": "Eary Bird",
        "beginAt": 4,
        "color": "#8B98CE",
        "salutation": "Good Morning",
        "sayings": [
            "OMG, it's the elusive EarlyBird!",
            "Oh hey, Early Riser!",
            "Good Dreams?",
            "Have a great day!",
            "Getting a headstart on the day?"
        ]
    },
    {
        "name": "morning",
        "label": "Morning",
        "beginAt": 8,
        "color": "#56D8FF",
        "salutation": "Good Morning",
        "sayings": [
            "How are you doing?",
            "Have a wonderful day!",
            "Have a great day!",
            "How’d ya sleep?",
            "What’s for breakfast?"
        ]
    },
    {
        "name": "afternoon",
        "label": "Afternoon",
        "beginAt": 12,
        "color": "#FFD874",
        "salutation": "Good Afternoon",
        "sayings": [
            "It’s NOM NOM Time",
            "How’s the day going?",
            "It’s Food o’Clock!",
            "Lunch time?",
            "What’s up!?"
        ]
    },
    {
        "name": "midafternoon",
        "label": "Mid-Afternoon",
        "beginAt": 15,
        "color": "#FFB774",
        "salutation": "Good Afternoon",
        "sayings": [
            "How are you doing?",
            "Have a wonderful day!",
            "Hulu &amp; Hang?",
            "Have a wicked day!",
            "How’s the day going?"
        ]
    },
    {
        "name": "evening",
        "label": "Evening",
        "beginAt": 18,
        "color": "#FF8774",
        "salutation": "Good Evening",
        "sayings": [
            "How’s your day been?",
            "Dinner plans?",
            "Netfix &amp; Pizza?",
            "Winding down for the night?",
            "Excited for tomorrow?",
            "How’s it going?"
        ]
    },
    {
        "name": "night",
        "label": "Night",
        "beginAt": 21,
        "color": "#284BD7",
        "salutation": "Good Night",
        "sayings": [
            "Sweet Dreams",
            "Plans Tonight?",
            "Netfix &amp; Chinese?",
            "Have a great night!",
            "Hope it’s a good one!"
        ]
    }
]
