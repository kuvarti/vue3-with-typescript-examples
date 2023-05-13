<template>
	<div>
		<label for="todoText"></label>
		<input @keydown.enter="newitem(additem, $event)" type="text" id="todoText" placeholder="Input giriniz..">
	</div>
</template>

<script>
export default {
	props : {
		additem : {
			type: Function,
			required: true
		}
	},
	methods : {
		newitem(additem, event) {
			additem(event.target.value);
			event.target.value = "";
		}
	}
}
</script>