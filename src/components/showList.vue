<template>
	<ul>
		<icerik v-for="items in showlist.todos" :key="items.id" :content="items"/>
	</ul>
</template>

<script>
import icerik from "@/components/listContentItem"
export default {
	inject : {
		showlist : {
			todos : {
				id : {
						type: Number
				},
				text : {
					type: String
				},
				required: true
			}
		}
	},
	watch : {
	},
	components :{
		icerik
	}
}
</script>
