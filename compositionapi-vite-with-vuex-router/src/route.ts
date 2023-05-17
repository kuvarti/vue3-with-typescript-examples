import { createRouter, createWebHashHistory } from "vue-router"

const paths= [
	{
		name: "HomePage",
		path: "/",
		component: () => import("./components/Homepage.vue")
	},
	{
		name: "Timer",
		path: "/timer",
		component: () => import("./components/timercontent.vue")
	},
	{
		name: "OddOrEven",
		path: "/oddeven",
		component: () => import("./components/LightSelami.vue")
	},
	{
		name: "Hilmi's-Asencron-component",
		path: "/hilmi",
		component: () => import("./components/BuyukHilmi.vue")
	}
];

const route = createRouter({
	routes: paths,
	history: createWebHashHistory()
});

export default route;