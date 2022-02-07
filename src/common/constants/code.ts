import { CodeLogo } from '@/common/types/code';

export const CODE_LOGOS_PATH = 'https://john-goben-portfolio.s3.us-east-2.amazonaws.com/code/logos/';

export const WORK_LOGOS = [
    {
        name: 'GetWellNetwork, Inc',
        filename: 'getwell.svg',
    },
    {
        name: 'RightEye, LLC',
        filename: 'righteye.png',
    },
] as CodeLogo[];

export const LANGUAGE_LOGOS = [
    {
        name: 'C++',
        filename: 'cplusplus.png',
    },
    {
        name: 'Java',
        filename: 'java.png',
    },
    {
        name: 'JavaScript',
        filename: 'javascript.png',
    },
    {
        name: 'SQL',
        filename: 'sql.png',
    },
    {
        name: 'Python',
        filename: 'python.png',
    },
    {
        name: 'Lua',
        filename: 'lua.png',
    },
] as CodeLogo[];

export const TOOL_LOGOS = [
    {
        name: 'Vue.js',
        filename: 'vue.png',
    },
    {
        name: 'AWS',
        filename: 'aws.png',
    },
    {
        name: 'Spring',
        filename: 'spring.png',
    },
] as CodeLogo[];

export const PROJECT_LOGOS = [
    {
        name: 'TIEngine',
        filename: 'tiengine.png',
    },
    {
        name: 'johngoben',
        filename: 'portfolio.png',
    },
    {
        name: 'DocsBay94',
        filename: 'docsbay94.png',
    },
];

export const WORK_DESCRIPTIONS = [
    {
        title: 'RightEye, LLC',
        logo: WORK_LOGOS[0],
        subtitle: 'Senior Software Engineer',
        rightSubtitle: 'January, 2020 -> October, 2021',
        description: [
            'Designed, iterated, and then developed major product interface redesign with stakeholders',
            'Migrated server log management to Datadog for better product analysis and troubleshooting',
            'Rewrote development documentation and ‘Get Started’ materials for the full stack',
        ],
    },
    {
        title: 'GetWellNetwork, Inc',
        logo: WORK_LOGOS[1],
        subtitle: 'Software Engineer',
        rightSubtitle: 'OBjectober, 2017 -> December, 2019',
        description: [
            'Implemented, and maintained RESTful internal tools and services based on rapidly evolving requirements',
            'Implemented AWS Lambda serverless based central media management and storage system',
            'Developed client contracted server upgrade and maintenance windows using Google Calendar API',
            'Designed and implemented heuristic based custom project tracking tools for legacy projects',
            'Modernized our development environment using Docker so new developers can get writing immediately',
        ],
    },
    {
        title: 'GetWellNetwork, Inc',
        logo: WORK_LOGOS[1],
        subtitle: 'Senior Content Configuration Specialist',
        rightSubtitle: 'January, 2013 -> October, 2017',
        description: [
            'Recognized as a top 10% employee for exceptional team and company contributions',
            'Designed and developed content for major healthcare systems using HTML, CSS, JavaScript',
            'Managed West Coast and Mid Atlantic ~5.2mil ARR strategic client configurations',
            'Represented team to engineering and product departments as technical subject matter expert',
            'Developed and launched new internal and client facing reporting tools and interfaces',
            'Proposed and implemented Git source control process',
            'Trained new team members on internal process and tools like Agile, Git, and JIRA',
        ],
    },
];

export const PROJECT_DESCRIPTIONS = [
    {
        title: 'TIEngine',
        logo: PROJECT_LOGOS[0],
        subtitle: '2D Game Engine',
        rightSubtitle: 'https://www.github.com/TwinHits/TIEngine',
        description: [
            'TIEngine is a 2D Game Engine written in C++ utilizing on the SFML Graphics Library with a Lua interface.',
            'Users can keep their game behavior in Lua and leave the managing of TIEntities, drawing, physics, and other fundamentals to TIEngine.',
            'Entities are quickly and efficently defined using an Entity Component System and then organized into a Scene Graph for efficient drawing.',
            'This project depends on Boost, SOL 3.0, and SFML. It runs on Linux and Windows, including WSL.',
        ],
    },
    {
        title: 'www.johngoben.com',
        logo: PROJECT_LOGOS[1],
        subtitle: 'Resume & Portfolio Website',
        rightSubtitle: 'https://www.github.com/TwinHits/johngoben',
        description: [
            "You're here now! Welcome 😊",
            'This website was created using Vue.js, JavaScript, and hosted using AWS.',
            "It's development is supported with Vuetify, TypeScript, Prettier, SASS, ESLint, Material Design, and FontAwesome.",
            'It was designed from scratch after several iterations and valuable feedback sessions with interested partners.',
        ],
    },
    {
        title: 'Docs Bay 94',
        logo: PROJECT_LOGOS[2],
        subtitle: 'Local Documentation Writing Tool',
        rightSubtitle: 'https://www.github.com/TwinHits/docsbay94',
        description: [
            'Create and maintain your documentation through a simple, clean, and offline interface.',
            "Load up your project's documentation, edit it while you are working, then download it back into your repository.",
            'Written in JavaScript with TypeScript using Vue.js and Vuetify.',
        ],
    },
];
