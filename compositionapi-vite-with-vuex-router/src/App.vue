<template>
	<div>
		<navmenu :bgclr="bgclr"/>
		<div id="Content" class="col-md-8 offset-md-2 bg-red mycard">
			<h3 class=" ">{{ title }}</h3>
			<router-view @odd-event="asd = $event">
			</router-view>
		</div>
		<teleport to="#teleport">
			<teleported />
		</teleport>
	</div>
</template>

<style>
.mycard{
	border: 1px dashed black;
}
</style>

<script lang="ts">
import {ref, computed} from "vue";
import { useRoute } from "vue-router";
import navmenu from "./components/Navbar.vue";
import mtimer from "./components/timercontent.vue";
import bhilmi from "./components/BuyukHilmi.vue";
import teleported from "./components/namespace.vue"
export default {
	components : {
		navmenu,
		mtimer,
		bhilmi,
		teleported
	},
	setup(){
		//const title = ref("Bir Kadin cizeceksiiin");
		const show = ref(false);
		function toggleIt() {
			console.log("ToggleIt()")
			show.value = !show.value;
		}
		const toure = useRoute();
		const title = computed(() => {
			return toure.name
		})
		let asd = ref(false);
		const bgclr = computed(() => {
			console.log('run', asd.value)
			return asd.value
		})
		return {
			title,
			show,
			asd,
			bgclr,
			toggleIt
		};
	}
}
</script>