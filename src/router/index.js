import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: "/", //ruta a la que nos vamos a dirigir por defecto
        name: "Home", //el nombre
        component: () =>
            import ( /* webpackChunkName: "Home" */ "../views/Home.vue"), //importamos vista
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: () =>
            import ( /* webpackChunkName: "Edit" */ '../views/Edit.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router