<template>
	<div>
		<div class="d-flex">
			<button @click="starttimer" class="btn-sm btn btn-primary">Basla</button>
			<button @click="stoptimer" class="btn-sm btn btn-secondary">Durdur</button>
			<div class="redcrcl" v-show="process" alt="Selam canisi"></div>
		</div>
		<h1> {{ displaytime }} seconds </h1>
	</div>
</template>

<style>
.redcrcl{
	background-color: red;
	border: 1px solid black;
	border-radius: 100%;
	width: 15px;
	height: 15px;
	margin: 5px;
}
</style>

<script lang="ts">
import {ref, watchEffect} from 'vue'
export default {
	setup() {
		let	starttime:number = 1;
		let	process = ref(false);
		const displaytime = ref(0)
		function starttimer() {
			if (process.value === false)
			{
				process.value = !process.value;
				starttime = new Date().getTime();
			}
		}
		function stoptimer() {
			if (starttime !== 0 && process.value === true)
			{
				displaytime.value = (new Date().getTime() - starttime) / 1000;
				starttime = 0;
				process.value = !process.value;
			}
		}
		return {
			displaytime,
			starttimer,
			stoptimer,
			process
		}
	}
}
</script>