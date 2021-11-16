<template>
    <v-hover v-slot="{ hover }">
        <v-row class="hover-area" align="center" justify="center">
            <v-col md="auto">
                <Transition :name="transition" mode="out-in" >
                    <v-card class="next-view-icon-card" @click="changeView" v-show="hover">
                        <v-icon color="black" :size="size">{{ icon }}</v-icon>
                    </v-card>
                </Transition>
            </v-col>
        </v-row>
    </v-hover>
</template>

<script lang="ts">
import Vue from 'vue'

import * as NavigationUtils from '@/common/utils/navigation';

export default Vue.extend({
    props: {
        direction: {
            type: String,
            required: true,
        }
    }, 
    data() {
        return {
            size: "6vh",
        };
    },
    computed: {
        up(): boolean {
            return this.direction === 'up';
        },
        down(): boolean {
            return this.direction === 'down';
        },
        icon(): string {
            return this.up ? "mdi-arrow-up-bold" : "mdi-arrow-down-bold";
        },
        transition(): string {
            return this.up ? "slide-down" : "slide-up";
        }
    },
    methods: {
        changeView() {
            let nextRoute;
            if (this.up) {
                nextRoute = NavigationUtils.findNextRoute(this.$router.currentRoute, -1);
            } else if (this.down) {
                nextRoute = NavigationUtils.findNextRoute(this.$router.currentRoute, 1);
            }

            if (nextRoute) {
                this.$router.push(nextRoute.route);
            }
        },
    }
});
</script>

<style scoped lang="scss">
@import "@/style/Transitions.scss";

.hover-area {
    width: 100vw;
    height: 9vh;
    z-index: 1;
}

.next-view-icon-card {
    padding: .5vh 1.5vw;
}

</style>