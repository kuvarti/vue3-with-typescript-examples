<template>
	<ul>
		<!-- <icerik v-for="items in showlist.todos" :key="items.id" :content="items"/> -->
		<icerik v-for="items in nebu" :key="items.id" :content="items"/>
	</ul>
</template>

<script>
import icerik from "@/components/listContentItem"
export default {
	//inject : {
	//	showlist : {
	//		todos : {
	//			id : {
	//					type: Number
	//			},
	//			text : {
	//				type: String
	//			},
	//			required: true
	//		}
	//	}
	//},
	computed : {
		nebu() {
			return this.$store.getters['_todolist']
		}
	},
	watch : {
		nebu: {
			
		}
	},
	components :{
		icerik
	}
}
</script>
