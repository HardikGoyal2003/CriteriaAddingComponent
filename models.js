// Schema Structure
const RULES_SCHEMA = {
    name: { type: String, required: true },
    active: { type: Boolean, default: false },
    criteria: { type: Array, default: [] },
}

// Dummy Data
const CACHING_ACTIVE_RULE = {
    name: 'Caching',
    active: false,
    criteria: [
        {'criteria_1':[        
            '192.45.1.1',
            '192.62.1.1',
            '192.60.1.1',
            '192.61.1.1'
        ]},
        {'criteria_2':[
            '192.45.1.1',
        ]},
        {'criteria_2':[]},
        {'criteria_1':[
            '192.60.1.1',
            '192.61.1.1'
        ]}
    ],
}

const HTML_ACTIVE_RULE = {
    name: 'HTML',
    active: false,
    criteria: [
        {'criteria_1': [
            '192.45.1.1',
            '192.62.1.1',
            '192.60.1.1',
            '192.61.1.1'
        ]},
        {'criteria_1': []}
    ],
}

const CSS_ACTIVE_RULE = {
    name: 'CSS',
    active: false,
    criteria: [
        {'criteria_2': []}
    ],
}

let components = [
    CACHING_ACTIVE_RULE,
    HTML_ACTIVE_RULE,
    CSS_ACTIVE_RULE,
]



export { 
        components } 