<template>
    <transition name="slide-fade">
        <keep-alive>
            <router-view :user="user"/>
        </keep-alive>
    </transition>
</template>
<script>
import Breadcrum from "../../components/dashboard/breadcrum";

export default {
    name: 'DashboardContainer',
    components: {Breadcrum},
    props: {
        user: Object
    }
}
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
    transition: all .4s ease;
}

.slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
