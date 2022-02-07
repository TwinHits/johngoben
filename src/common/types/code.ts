export interface CodeLogo {
    name: string;
    filename: string;
}

export interface CodeCardItem {
    title: string;
    subtitle: string;
    rightSubtitle: string;
    logo: CodeLogo;
    description: string[];
}

export interface CodeSkillsItem {
    title: string;
    skills: CodeSkill[];
}

export interface CodeSkill {
    name: string;
    proficiency: Proficiency;
}

export enum Proficiency {
    Familiar = 0,
    Proficient = 1,
    Excellent = 2,
    Expert = 3,
}
