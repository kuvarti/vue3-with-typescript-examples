<template>
	<li class="d-flex justify-content-between align-items-center">
		<span> {{content.text}} </span>
		<button @click="dellTodo(content.id)" class="sm red">Sil</button>
	</li>
</template>

<script>
export default {
	props : {
		content : {
			id : {
				type: Number
			},
			text : {
				type: String
			},
			required: true
		}
	},
	inject : {
		dellTodo : {
			type : Function,
			required: true
		}
	}
}
</script>