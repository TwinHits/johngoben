<template>
    <v-row class="row-container">
        <v-col class="left-summary">
            <v-row class="personal-img-section" no-gutters>
                <v-col>
                    <v-img class="personal-img" :src="aboutPicture" contain aspect-ratio="1" />
                </v-col>
            </v-row>
            <v-row class="personal-summary-section" no-gutters>
                <v-col>
                    <v-row align="center" justify="center" no-gutters>
                        <v-col class="name-title text-center"> John Goben </v-col>
                    </v-row>
                    <v-row align="center" justify="center" no-gutters>
                        <v-col class="name-subtitle text-center"> Software Engineer </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-divider />
            <v-row class="contact-summary-section" no-gutters>
                <v-col>
                    <v-row class="contact-text-row" no-gutters>
                        <v-col :cols="2"><v-icon size="20">mdi-web</v-icon></v-col
                        ><v-col class="contact-text" :cols="10"
                            ><a href="http://www.johngoben.com">www.johngoben.com</a></v-col
                        >
                    </v-row>
                    <v-row class="contact-text-row" no-gutters>
                        <v-col :cols="2"><v-icon size="20">mdi-email-outline</v-icon></v-col
                        ><v-col class="contact-text" :cols="10"><a>goben.john@gmail.com</a></v-col>
                    </v-row>
                    <v-row class="contact-text-row" no-gutters>
                        <v-col :cols="2"><v-icon size="20">mdi-cellphone</v-icon></v-col
                        ><v-col class="contact-text" :cols="10">(206) 498-1657</v-col>
                    </v-row>
                    <v-row class="contact-text-row" no-gutters>
                        <v-col :cols="2"><v-icon size="20">mdi-map-marker-outline</v-icon></v-col
                        ><v-col class="contact-text" :cols="10">Washington, D.C.</v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-divider />
            <v-row class="education-summary-section" align="center" no-gutters>
                <v-col>
                    <v-row no-gutters align="center">
                        <v-col class="education-title text-center">
                            <v-img class="work-logo-img" :src="gwuLogo" aspect-ratio="4" contain />
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col class="education-subtitle"> BA in Political Communication, 2012 </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col class="education-subtitle"> Minor in Philosophy </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-divider />
            <v-row class="languages-summary-section" no-gutters>
                <v-col>
                    <v-row
                        class="language-row"
                        v-for="skill in skills"
                        :key="skill.name"
                        align="center"
                        justify="space-between"
                        no-gutters
                    >
                        <v-col class="language-row-name text-left" :cols="6">
                            {{ skill.name }}
                        </v-col>
                        <v-col :cols="6" class="text-center">
                            <ProficiencyTag :content="skill.proficiency" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-col class="main-body">
            <v-row align="center" justify="center" no-gutters>
                <v-col>
                    <v-row
                        class="resume-section-title resume-section-title-top"
                        align="center"
                        justify="center"
                        no-gutters
                    >
                        <v-col class="text-center" cols="1"><v-icon size="30">mdi-account-box-outline</v-icon> </v-col>
                        <v-col cols="11"> Professional Summary</v-col>
                    </v-row>
                    <v-divider />
                    <v-row class="work-section text-left" no-gutters>
                        <v-col class="personal-summary">
                            {{ personalSummary }}
                        </v-col>
                    </v-row>
                    <v-row class="resume-section-title" align="center" justify="space-around" no-gutters>
                        <v-col class="text-center" cols="1"><v-icon size="30">mdi-desktop-classic</v-icon> </v-col>
                        <v-col cols="11"> Work History</v-col>
                    </v-row>
                    <v-divider />
                    <v-row
                        v-for="(work, index) in workDescriptions"
                        :key="index"
                        class="work-section"
                        align="center"
                        justify="space-around"
                        no-gutters
                    >
                        <v-col>
                            <v-row v-if="index !== 2" no-gutters justify="space-between" align="center">
                                <v-col class="col-auto work-title" align-self="center">{{ work.title }}</v-col>
                                <v-col cols="2">
                                    <v-img
                                        class="work-logo-img"
                                        :src="codeLogosPath + work.logo.filename"
                                        contain
                                        aspect-ratio="2"
                                        max-height="1.3cm"
                                    />
                                </v-col>
                            </v-row>
                            <v-row no-gutters justify="space-between">
                                <v-col class="col-auto work-subtitle">{{ work.subtitle }}</v-col>
                                <v-col class="text-right col-auto work-subtitle">
                                    {{ work.rightSubtitle }}
                                </v-col>
                            </v-row>
                            <ul class="work-section-ul">
                                <li class="work-section-li" v-for="line in work.description" :key="line">
                                    {{ line }}
                                </li>
                            </ul>
                        </v-col>
                    </v-row>
                    <v-row class="resume-section-title" align="center" justify="space-around" no-gutters>
                        <v-col class="text-center" cols="1"><v-icon size="30">mdi-git</v-icon> </v-col>
                        <v-col cols="11">Personal Projects</v-col>
                    </v-row>
                    <v-divider />
                    <v-row
                        v-for="(project, index) in projectDescriptions.slice(0, 2)"
                        :key="index"
                        class="work-section"
                        align="center"
                        justify="space-around"
                        no-gutters
                    >
                        <v-col>
                            <v-row no-gutters justify="space-between" align="center">
                                <v-col class="col-auto work-title" align-self="center">{{ project.title }}</v-col>
                                <v-col cols="2">
                                    <v-img
                                        class="work-logo-img"
                                        :src="codeLogosPath + project.logo.filename"
                                        contain
                                        aspect-ratio="2"
                                        max-height="1.3cm"
                                    />
                                </v-col>
                            </v-row>
                            <v-row no-gutters justify="space-between">
                                <v-col class="col-auto work-subtitle">{{ project.subtitle }}</v-col>
                                <v-col class="text-right col-auto work-subtitle">
                                    <a :href="project.rightSubtitle">{{ project.rightSubtitle }}</a>
                                </v-col>
                            </v-row>
                            <ul class="work-section-ul">
                                <li class="work-section-li" v-for="line in project.description" :key="line">
                                    {{ line }}
                                </li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

import * as Code from '@/common/constants/code';
import * as About from '@/common/constants/about';
import * as Resume from '@/common/constants/resume';

import ProficiencyTag from '@/views/components/code/ProficiencyTag.vue';

export default Vue.extend({
    components: {
        ProficiencyTag,
    },
    data() {
        return {
            personalSummary: Resume.PERSONAL_SUMMARY,
            workDescriptions: Resume.WORK_DESCRIPTIONS,
            projectDescriptions: Resume.PROJECT_DESCRIPTIONS,
            skills: Resume.SKILLS,
            otherSkills: Resume.OTHER_SKILLS,
            aboutPicture: About.ABOUT_PATH + About.ABOUT_PICTURE,
            gwuLogo: Resume.RESUME_PATH + Resume.GWU_LOGO_HORIZONTAL,
            codeLogosPath: Code.CODE_LOGOS_PATH,
        };
    },
    mounted() {
        document.title = 'Resume_JohnGoben.pdf';
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';
@import '@/style/Links.scss';

.row-container {
    height: 100%;
}

.left-summary {
    background: $midground;
    box-shadow: 2px 0px 1px $background;
    z-index: 2;
    padding-left: 0.75cm;
    flex-grow: 3;
}

.personal-img-section {
    margin-bottom: 1vh;
}

.personal-img {
    border-radius: 50%;
    width: 80%;
    margin: 0 10% 0 10%;
    box-shadow: 2px 2px 5px $background;
}

.personal-summary-section {
    margin-bottom: 2vh;
}

.personal-summary {
    padding: 0 1vw;
}

.name-title {
    font-weight: bold;
    font-size: 28pt;
}

.name-subtitle {
    font-size: 19pt;
}

.education-summary-section {
    margin-top: 1vh;
    margin-bottom: 2vh;
}

.education-title {
    font-weight: bold;
    font-size: 12pt;
}

.education-subtitle {
    font-size: 11pt;
}

.languages-summary-section {
    margin-top: 2vh;
}

.language-row-name {
    font-weight: bold;
    font-size: 11pt;
    padding: 0.15cm 0 0.15cm 0;
}

.contact-summary-section {
    margin-bottom: 1vh;
}

.contact-text-row {
    margin-top: 1vh;
}

.contact-text {
    font-weight: bold;
    font-size: 12pt;
}

.main-body {
    background: $off-white;
    flex-grow: 9;
}

.resume-section-title {
    font-weight: bold;
    font-size: 20pt;
    text-align: left;
    margin-top: 2vh;
}

.resume-section-title-top {
    margin-top: 1vh;
}

.work-section {
}

.work-title {
    font-size: 16pt;
    font-weight: bold;
}

.work-subtitle {
    font-size: 13pt;
    font-weight: bold;
    padding-left: 1vw;
}

.work-section-li {
    font-size: 11pt;
}
</style>
