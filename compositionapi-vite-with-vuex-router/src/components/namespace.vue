<template>
	<div class="col-md-4 offset-md-4 nmspc d-flex justify-content-around">
		<frm.textbox @value-send="usertxt = $event"></frm.textbox>
		<frm.buton :vnt="activatebtn"></frm.buton>
		<frm.label :txt="usertxt"></frm.label>
	</div>
</template>

<style>
.nmspc{
	margin-top: 2%;
	padding: 5px;
	border: 1px red solid;
}
</style>

<script setup lang="ts">
import * as frm from "./form-comp"
import { ref, watch } from 'vue'
const usertxt = ref("");

const activatebtn= () => {
	alert(usertxt.value)
}
</script>