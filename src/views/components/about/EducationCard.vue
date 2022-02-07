<template>
    <v-card class="education-card">
        <v-card-text>
            <v-row align="center" no-gutters>
                <v-col cols="9">
                    <v-row class="about-card-subtitle" no-gutters>
                        <v-col> The George Washington University, 2012 </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col> Bachelor of Arts in Political Communication </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col> Minor in Philosophy </v-col>
                    </v-row>
                </v-col>
                <v-col cols="3">
                    <v-img class="logo-img" :src="gwuLogo" aspect-ratio="1" contain />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import * as About from '@/common/constants/about';

export default Vue.extend({
    data() {
        return {
            gwuLogo: About.ABOUT_PATH + About.GWU_LOGO,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/style/Colors.scss';
@import '@/style/components/AboutCard.scss';

.education-card {
    background: $super-foreground;
}

</style>
