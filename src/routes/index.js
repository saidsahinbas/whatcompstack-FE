import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../views/HomeComponent.vue";
import DetailsComponent from "../views/DetailsComponent.vue";
import JobsList from "../views/JobsList.vue";
import AddCompany from "../views/AddCompany.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeComponent,
	},
	{
		path: "/details/:name",
		name: "Details",
		component: DetailsComponent,
		props: true,
	},
	{
		path: "/jobs-list",
		name: "JobsList",
		component: JobsList,
	},
	{
		path: "/add-company",
		name: "AddCompany",
		component: AddCompany,
	},
	{
		path: "/:notFound",
		component: NotFound
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
