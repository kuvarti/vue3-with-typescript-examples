<template>
	<div id="lightselami">
		<h3>{{ printodd }}</h3>
		<button @click="nbr++" class="btn btn-sm btn-secondary mbtn">{{ nbr }}</button>
	</div>
</template>

<style>
.mbtn{
	width: 100px;
}
</style>

<script setup lang="ts">
import utils from "@/composables/lightselami"
import { onMounted, onUnmounted, watch } from "vue";
const { printodd, nbr } = utils();

const emit = defineEmits(["odd-event"])
watch(printodd, (newvalue) => {
	if (newvalue === 'odd') emit('odd-event', true)
	else emit("odd-event", false)
})

onMounted(() => {
	console.log("Light Selami gooorse kabarir gooogsu")
})

onUnmounted(() => {
	emit('odd-event', true)
})
</script>