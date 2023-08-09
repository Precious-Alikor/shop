import { useRouter, useRoute } from "#app";
import { ref, watch } from "vue";

export const useQueryParamsTabSwitch = (tabs) => {
  const router = useRouter();
  const route = useRoute();
  let type = ref(tabs.includes(route.query.tab) ? route.query.tab : tabs[0]);

  watch(type, (newValue) => {
    router.push({
      path: route.path,
      query: { tab: newValue },
    });
  });

  return type;
};
