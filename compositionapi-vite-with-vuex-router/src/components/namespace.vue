<template>
	<div class="col-md-4 offset-md-4 nmspc d-flex justify-content-around">
		<frm.textbox></frm.textbox>
		<frm.buton></frm.buton>
		<frm.label></frm.label>
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
</script>