<template>
	<input type="text" placeholder="Yazi giriniz" v-model="props" @keydown.enter="degeryolla">
</template>

<script setup lang="ts">
import {computed, ref, watch} from 'vue'
const props = ref("")
const emit = defineEmits(["value-send"])
watch(props, (newvl) => {
	emit('value-send', newvl)
})
const degeryolla = (event: any) => {
	console.log(event.target.value)
}
</script>