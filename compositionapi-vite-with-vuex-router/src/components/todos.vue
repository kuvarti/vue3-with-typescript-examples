<template>
	<div>
		<h2>Todos</h2>
		<ul>
			<li v-for="items in todoList" :key="items.id">{{ items.title }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue"

const todoList = ref([])
fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json())
	.then((json) => todoList.value = json);
</script>
