<template>
	<div>
		<navmenu :bgclr="bgclr"/>
		<div id="Content" class="col-md-8 offset-md-2 bg-red mycard">
			<div class="d-flex">
				<h3 class=" ">{{ title }} - {{ store.getters.gettotal }}</h3>
				<img v-if="store.getters.gettotal === 31" src="https://pbs.twimg.com/profile_images/2012326737/nah-hareketi_210013_400x400.jpg" alt="nah" class="imgg">
			</div>
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
.imgg{
	width: 40px;
	height: 40px;
	margin-left: 5px;
}
</style>

<script lang="ts">
import {ref, computed, onMounted} from "vue";
import { useRoute } from "vue-router";
import navmenu from "./components/Navbar.vue";
import mtimer from "./components/timercontent.vue";
import bhilmi from "./components/BuyukHilmi.vue";
import teleported from "./components/namespace.vue";
import { useStore } from 'vuex'

export default {
	components : {
		navmenu,
		mtimer,
		bhilmi,
		teleported
	},
	setup(){
		const store = useStore();
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
			toggleIt,
			store
		};
	}
}
</script>