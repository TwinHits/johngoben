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
