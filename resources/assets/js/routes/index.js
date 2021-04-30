import backendRoutes from "./dashboardRoutes";
import frontendRoutes from "./frontendRoutes";
import VueRouter from "vue-router";
import NotFound from "../views/404";


const routes = [
    frontendRoutes,
    backendRoutes,
    {
        path: '*', name: 'page_not_found', component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.MIX_BASE_URL,
    routes: routes
})

router.beforeEach((to, from, next) => {
    document.title = `${process.env.MIX_APP_NAME} - ${to.name}`;
    window.scrollTo(0, 0);
    next()
});

export default router;


