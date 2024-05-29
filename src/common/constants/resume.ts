import * as Common from '@/common/constants/common';

import { CodeCardItem, CodeSkill, Proficiency } from '@/common/types/code';

import { PROJECT_LOGOS } from '@/common/constants/code';
import { WORK_LOGOS } from '@/common/constants/code';

export const RESUME_PATH = Common.ASSETS_PATH + 'resume/';
export const GWU_LOGO_HORIZONTAL = 'gwu_horizontal.png';
export const AWS_CLOUD_PRACTIONER_BADGE = 'aws-certified-cloud-practitioner.png';

export const PERSONAL_SUMMARY =
    'Focused, quick learning, and dedicated team member with skills across the stack from designing the front end, implementing RESTful services in the back end, writing up database schemas, to configuring cloud services.';

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
        name: 'Vue.js',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'Django',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'SQL',
        proficiency: Proficiency.Excellent,
    },
    {
        name: 'Lua',
        proficiency: Proficiency.Excellent,
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
        title: 'Ten Mile Square Technologies, LLC',
        logo: WORK_LOGOS[2],
        subtitle: 'Software Engineer - SoundExchange',
        rightSubtitle: 'July, 2022 → Present',
        description: [
            'Designed and maintained backward-compatible new features in Django with Python',
            'Implemented Multi-Factor Authentication with AWS Cognito and Just-In-Time Migration',
            'Implemented sensitive document storage and access for VIP users',
            'Architected and supervised multiple migrations from AngularJS to Vue.js with TypeScript',
        ],
    },
    {
        title: 'RightEye, LLC',
        logo: WORK_LOGOS[1],
        subtitle: 'Senior Software Engineer',
        rightSubtitle: 'January, 2020 → October, 2021',
        description: [
            'Designed and implemented new products for an emerging startup using Java and Spring',
            'Designed and developed major product interface redesigns with Vue.js and TypeScript',
            'Built and supported AWS cloud-based solutions for new and existing products.',
        ],
    },
    {
        title: 'GetWellNetwork, Inc',
        logo: WORK_LOGOS[0],
        subtitle: 'Software Engineer',
        rightSubtitle: 'October, 2017 → December, 2019',
        description: [
            'Implemented and maintained internal tools and REST services in Java with Wildfly',
            'Implemented media management and storage system with JavaScript and AWS Lambda',
            'Developed client-server maintenance windows architecture with Google APIs',
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
            'Trained new team members on internal tools and processes like Agile, Git, and JIRA',
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
            '2D Game Engine written in C++ using the SFML Graphics Library',
            'Implements common Game Engine patterns such as Entity Component Systems, Scene Graphs, Event Publishing, Message Management, Assets Loading, and Behavior Trees',
            'Supports Lua scripts for writing game behaviors outside of the engine',
        ],
    },
] as CodeCardItem[];
