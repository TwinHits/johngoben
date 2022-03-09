import * as Common from '@/common/constants/common';

import { CodeCardItem, CodeSkill, Proficiency } from '@/common/types/code';

import { PROJECT_LOGOS } from '@/common/constants/code';
import { WORK_LOGOS } from '@/common/constants/code';

export const RESUME_PATH = Common.ASSETS_PATH + 'resume/';
export const GWU_LOGO_HORIZONTAL = 'gwu_horizontal.png';

export const PERSONAL_SUMMARY =
    'Focused, quick learning, and dedicated team member with skills down the stack from designing front end applications, implementing RESTful back end services, writing up database schemas, to configuring cloud services.';

export const SKILLS = [
    {
        name: 'C++',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'JavaScript',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'Java',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'Python',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'AWS',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'Vue.js',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'Git',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'SQL',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'HTML & CSS',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'C#',
        proficiency: Proficiency.Proficient,
    },
    {
        name: 'Lua',
        proficiency: Proficiency.Proficient,
    },
    {
        name: 'Bash',
        proficiency: Proficiency.Proficient,
    },
] as CodeSkill[];

export const OTHER_SKILLS = [
    {
        name: 'Public Speaking',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'Level Design',
        proficiency: Proficiency.Excellent,
    },
];

export const WORK_DESCRIPTIONS = [
    {
        title: 'RightEye, LLC',
        logo: WORK_LOGOS[1],
        subtitle: 'Senior Software Engineer',
        rightSubtitle: 'January, 2020 → October, 2021',
        description: [
            'Designed, implemented, and maintained new products for an emerging startup',
            'Built and supported AWS cloud based solutions for new and existing products',
            'Researched and selected technologies and tools to support product development',
            'Refactored legacy projects and implemented popular new features in C# with WPF',
            'Designed and developed major product interface redesigns with Vue.js and TypeScript',
            'Migrated server logs to Datadog for better product analysis and troubleshooting',
        ],
    },
    {
        title: 'GetWellNetwork, Inc',
        logo: WORK_LOGOS[0],
        subtitle: 'Software Engineer',
        rightSubtitle: 'October, 2017 → December, 2019',
        description: [
            'Implemented and maintained internal tools and REST services in Java with Wildfly',
            'Implemented AWS Lambda serverless based media management and storage system',
            'Developed client server maintenance windows architecture using Google Calendar API',
        ],
    },
    {
        title: 'GetWellNetwork, Inc',
        logo: WORK_LOGOS[0],
        subtitle: 'Senior Content Configuration Specialist',
        rightSubtitle: 'January, 2013 → October, 2017',
        description: [
            'Developed content for major healthcare systems with HTML, CSS, and JavaScript',
            'Consistently recognized as a top 10% employee for exceptional contributions',
            'Trained new team members on internal process and tools like Agile, Git, and JIRA',
        ],
    },
] as CodeCardItem[];

export const PROJECT_DESCRIPTIONS = [
    {
        title: 'TIEngine',
        logo: PROJECT_LOGOS[0],
        subtitle: '2D Game Engine',
        rightSubtitle: 'github.com/TwinHits/TIEngine',
        description: [
            '2D Game Engine written in C++ with the SFML Graphics Library',
            'Provides Lua interface for writing game behaviors outside of the engine',
            'Utilizes an Entity Component System and a Scene Graph for efficient drawing',
            'This project runs on Windows, Linux, and depends on Boost, SOL 3.0, and SFML',
        ],
    },
    {
        title: 'www.johngoben.com',
        logo: PROJECT_LOGOS[1],
        subtitle: 'Resume & Portfolio Website',
        rightSubtitle: 'github.com/TwinHits/johngoben',
        description: [
            'Portfolio website for showcasing level designs, code projects, and professional work',
            'Built on the Vue.js framework using the Vuetify component library',
            'Development was supported with TypeScript, Prettier, SASS, ESLint, and Material Design',
            'Deployment is maintained with infrastructure-as-code using AWS CDK',
        ],
    },
] as CodeCardItem[];
