import { CodeLogo, CodeCardItem, Proficiency, CodeSkill, CodeSkillsItem } from '@/common/types/code';

import * as Common from '@/common/constants/common';

export const CODE_LOGOS_PATH = Common.ASSETS_PATH + 'code/logos/';

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
        name: 'Docs Bay 94',
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
] as CodeCardItem[];

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
            'This website was created using the Vue.js framework.',
            'Development was supported with Vuetify, TypeScript, Prettier, SASS, ESLint, Material Design, and FontAwesome.',
            'Deployment is maintained with infrastructure-as-code using AWS CDK.',
            'Designed from scratch after several iterations and valuable feedback sessions with interested partners like my parents.',
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
] as CodeCardItem[];

export const SKILL_DESCRIPTIONS = [
    {
        title: 'Languages',
        skills: [
            {
                name: 'C++',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'Java',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'JavaScript',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'Python',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'SQL',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'Lua',
                proficiency: Proficiency.Proficient,
            },
            {
                name: 'C#',
                proficiency: Proficiency.Proficient,
            },
            {
                name: 'Bash',
                proficiency: Proficiency.Proficient,
            },
        ] as CodeSkill[],
    },
    {
        title: 'Frameworks, Libraries, and Tools',
        skills: [
            {
                name: 'Amazon Web Services',
                proficiency: Proficiency.Proficient,
            },
            {
                name: 'AWS Lambda',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'SFML',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'Wildfly',
                proficiency: Proficiency.Proficient,
            },
            {
                name: 'Spring',
                proficiency: Proficiency.Proficient,
            },
            {
                name: 'JUnit',
                proficiency: Proficiency.Proficient,
            },
            {
                name: 'Mockito',
                proficiency: Proficiency.Proficient,
            },
            {
                name: 'Liquibase',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'Node.js',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'MongoDB',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'REST Services',
                proficiency: Proficiency.Expert,
            },
            {
                name: 'Vue.js',
                proficiency: Proficiency.Expert,
            },
            {
                name: 'Vuetify',
                proficiency: Proficiency.Expert,
            },
            {
                name: 'Windows Presentation Framework (WPF)',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'JIRA',
                proficiency: Proficiency.Expert,
            },
            {
                name: 'Git',
                proficiency: Proficiency.Expert,
            },
            {
                name: 'Datadog',
                proficiency: Proficiency.Familiar,
            },
            {
                name: 'GTKRadiant',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'GitHub Actions',
                proficiency: Proficiency.Proficient,
            },
            {
                name: 'AWS Cloud Development Kit',
                proficiency: Proficiency.Proficient,
            },
        ] as CodeSkill[],
    },
    {
        title: 'Other Expertise',
        skills: [
            {
                name: 'Public Speaking',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'Tabletop Game Master',
                proficiency: Proficiency.Expert,
            },
            {
                name: 'Level Design',
                proficiency: Proficiency.Excellent,
            },
            {
                name: 'Writing',
                proficiency: Proficiency.Excellent,
            },
        ] as CodeSkill[],
    },
] as CodeSkillsItem[];
