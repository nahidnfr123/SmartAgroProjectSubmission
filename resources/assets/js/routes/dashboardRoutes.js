import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import NotFound from '../views/404';
import Index from '../views';

///////////////// ------------------------- \\\\\\\\\\\\\\\\\\\\\\\

import Register from '../views/auth/Register';
import Login from '../views/auth/Login';
import SocialLogin from '../views/auth/SocialLogin';
import EmailVerification from '../views/auth/EmailVerification';
import ForgotPassword from '../views/auth/ForgotPassword';
import ResetPassword from '../views/auth/ResetPassword';

///////////////// ------------------------- \\\\\\\\\\\\\\\\\\\\\\\

import Profile from '../views/dashboard/Users/Profile';

/////////////// -------------------  Dashboard .......
import Dashboard from '../views/dashboard/DashboardContainer';

import store from '../store';

function requireAuthenticated(to, from, next) {
    const authenticated = store.getters["auth/authenticated"];
    const user = store.getters["auth/user"];

    if (to.name !== 'Login' && !authenticated || !user) next({path: '/login'})
    else {
        next();
    }
}

function requireEmailVerified(to, from, next) {
    const authenticated = store.getters["auth/authenticated"];
    const user = store.getters["auth/user"];

    if (to.name !== 'Login' && !authenticated || !user) next({path: '/login'})
    else {
        if (user.email_verified_at != null) {
            next();
        } else {
            next({name: "EmailVerification"});
        }
    }
}

function preventAuthenticated(to, from, next) {
    const authenticated = store.getters["auth/authenticated"];
    const user = store.getters["auth/user"];
    if (authenticated && user) {
        next({
            path: '/',
        })
    } else {
        next()
    }
}

const routes = [
    {
        path: '/dashboard', name: 'Dashboard', component: Dashboard,
        beforeEnter: requireEmailVerified
    },
    {
        path: '/activities', name: 'Activities', component: Dashboard,
        beforeEnter: requireEmailVerified
    },
    {
        path: '*', name: 'page_not_found', component: NotFound
    }
]

export default routes


