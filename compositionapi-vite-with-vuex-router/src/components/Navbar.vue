<template>
	<div class="topbar" :class="{redbg: bgclr === false}">
		<button @click="{$router.push('/'); store.commit('inctotal')}" class="btn-sm btn csbtn">
			Husnu
		</button>
		<button @click=" {$router.push('/timer'); store.commit('inctotal')}" class="btn-sm btn csbtn">
			Faruk
		</button>
		<button @click="{$router.push('/oddeven'); store.commit('inctotal')}" class="btn-sm csbtn btn">
			Selami
		</button>
		<button @click="{$router.push('/hilmi'); store.commit('inctotal')}" class="btn-sm csbtn btn">
			Hilmi
		</button>
	</div>
</template>

<style>
.topbar{
	background-color:aquamarine;
	display: flex;
	justify-content: space-around;
}

.redbg{
	background-color: coral !important;
}

.csbtn{
	background-color: yellowgreen;
	color: blueviolet;
	margin: 2px;
	border: 1px solid blueviolet;
	border-radius: 20%;
}
</style>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import {useStore} from 'vuex'
const store = useStore()
const props = defineProps({ bgclr: Boolean});
</script>