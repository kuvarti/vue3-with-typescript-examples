<template>
	<div>
		<span v-if="err"> {{ err }}</span>
		<suspense v-else>
			<template #default>
				<todos />
			</template>
			<template #fallback>
				<span> Loading ... </span>
			</template>
		</suspense>
	</div>
</template>

<script setup lang="ts">
import { onErrorCaptured, ref, defineAsyncComponent} from "@vue/runtime-core"

const err = ref(null);
const Todos = defineAsyncComponent(() => import('./todos.vue'));
onErrorCaptured((e) => {
	err.value = e;
	return true;
})
</script>
