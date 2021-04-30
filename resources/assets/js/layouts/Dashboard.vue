<template>
    <div>
        <nav-bar :user="user"/>

        <aside-bar :user="user"/>

        <div class="app-content content">
            <div class="content-wrapper">

                <breadcrum :pageName="$route.name" v-if="!$router.currentRoute.meta.hideBread"/>

                <div class="alert alert-danger d-flex justify-content-between align-content-center align-items-center"
                     v-if="pendingStatus">
                    Your account is under review. Please wait for an admin to give you "officer" privilege.
                    <button class="btn btn-danger" @click.stop.prevent="pendingStatus = false">OK</button>
                </div>

                <transition name="slide-fade">
                    <keep-alive>
                        <router-view :user="user"/>
                    </keep-alive>
                </transition>

            </div>
        </div>

        <customizer/>
        <footer-bar/>
    </div>
</template>
<script>
import NavBar from "../components/dashboard/navBar";
import AsideBar from "../components/dashboard/asideBar";
import FooterBar from "../components/dashboard/footerBar";
import DashboardContainer from "../views/dashboard/DashboardContainer";
import Breadcrum from "../components/dashboard/breadcrum";
import Customizer from "../components/dashboard/customizer";
import {mapGetters} from "vuex";

export default {
    components: {
        Customizer,
        Breadcrum,
        DashboardContainer,
        FooterBar,
        AsideBar,
        NavBar
    },
    data() {
        return {
            pendingStatus: false,
        }
    },
    computed: {
        ...mapGetters({
            roles: 'auth/roles',
            userDetails: 'user_state/userDetails',
        })
    },
    props: {
        user: Object,
        BaseUrl: String,
    },
    methods: {
        isOfficerActive() {
            if (this.roles.includes('agricultural-officer')) {
                if (this.user.status == 'pending') {
                    this.pendingStatus = true;
                }
            }
        },
    },
    mounted() {
        this.isOfficerActive();
    },
}
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
{
    transform: translateX(10px);
    opacity: 0;
}
</style>
