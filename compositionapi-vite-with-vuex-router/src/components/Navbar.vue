<template>
	<div class="topbar" :class="{redbg: !bgclr}">
		<button @click="$router.push('/')" class="btn-sm btn csbtn">
			Husnu
		</button>
		<button @click=" $router.push('/timer')" class="btn-sm btn csbtn">
			Faruk
		</button>
		<button @click="$router.push('/oddeven')" class="btn-sm csbtn btn">
			Selami
		</button>
		<button @click="$router.push('/hilmi')" class="btn-sm csbtn btn">
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
import { defineProps, onUnmounted } from 'vue'
const props = defineProps({ bgclr: Boolean});

</script>