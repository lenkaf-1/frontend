import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DestinationView from "@/views/DestinationView.vue";
import ExperienceView from "@/views/ExperienceView.vue";
import TheNavigation from "@/components/TheNavigation.vue";
import dataDestinations from "../data.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/destination/:slug",
      name: "destination",
      component: DestinationView,
      props: true,
      children: [
        {
          path: ":experienceSlug",
          name: "experience",
          component: ExperienceView,
          props: true,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

export default router;
router.beforeEach((to) => {
  const isDestinationRoute = to.matched.some(
    (route) => route.name === "destination",
  );

  if (!isDestinationRoute) return;

  const exists = dataDestinations.destinations.some(
    (destination) => destination.slug === to.params.slug,
  );

  if (!exists) {
    return { name: "NotFound" };
  }
});
