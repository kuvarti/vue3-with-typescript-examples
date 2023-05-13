<template>
	<div class="container">
		<h3 class="text-center">ToDo App</h3>
		<hr>
		<adding :additem="addTodo" />
		<showing />
		<small class="mt-2 d-flex justify-content-end green">{{ todocount }} adet todo var</small>
	</div>
</template>

<script>
import axios from 'axios' 
import adding from "@/components/addSection"
import showing from "@/components/showList"
export default {
	mounted() {
		
		this.$store.commit("setTheme", "Yellow")
		console.log("value from getter : ", this.$store.getters.getTheme)
		this.$store.dispatch("setTheme", "selam")
	},
	created() {
		console.log("value from getter : ", this.$store.getters.getTheme)
	},
	components : {
		adding,
		showing
	},
	provide() {
		return {
			showlist : this.todoList,
			dellTodo: this.dellTodo
		}
	},
	data() {
		return {
			todoList : {
				todos: []
			}
		}
	},
	methods: {
		dellTodo(item) {
			console.log("dellTodo()", item);
			axios.delete(`http://localhost:3000/myList/${item}`).then(deger => {
				this.todoList.todos = this.todoList.todos.filter(todo => todo.id !== item);
				console.log(deger);
			})
		},
		addTodo(event) {
			console.log("addTodo()", this.$store.dispatch("pushItem", event))
		}
	},
	computed: {
		todocount() {
			return this.$store.getters["_todol"];
			//this.todoList.todos.length;
		}
	}
}
</script>
