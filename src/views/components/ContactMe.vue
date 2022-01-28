<template>
    <v-expand-transition>
        <v-card @click="setShow(!show)" class="contact-me" :class="{ 'contact-me-full': show }">
            <v-card-title>Contact Me</v-card-title>
            <v-expand-transition>
                <v-card-text v-if="show">
                    You can contact me about professional oppurtunities via my linkedin or email
                </v-card-text>
            </v-expand-transition>
        </v-card>
    </v-expand-transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            show: false,
        };
    },
    methods: {
        setShow(show: boolean) {
            this.show = show;
        },
    },
});
</script>

<style scoped lang="scss">
@import '@/style/Colors.scss';

.contact-me {
    background: $super-foreground;
    position: fixed;
    bottom: 2vh;
    left: 90vw;
}

.contact-me-full {
    background: $super-foreground;
    max-width: 20vw;
    left: 78vw;
}
</style>
