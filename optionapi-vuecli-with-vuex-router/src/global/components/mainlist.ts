import axios from "axios";

interface arraylist{
	todoList: Array<{ id: number; text: string }>
}

export default {
	state: {
		todoList: []	//todo this is not ....
	},
	getters : {
		_todolist(state: arraylist) : Array<{ id: number; text: string }> {
			return state.todoList
		},
		_todol(state: arraylist) :number {
			return state.todoList.length
		}
	},
	mutations : {
		_pushitem(state: arraylist, item: { id: number; text: string }) {
			state.todoList.push(item)
		},
		_popitem(state:arraylist, item: number) {
			console.log(item)
			state.todoList = state.todoList.filter(element => element.id !== item)
		}
	},
	actions : {
		pushItem(context, eleman: string) {
			const _id = new Date().getTime();
			axios.post('http://localhost:3000/myList', {
				id: _id,
				text: eleman
			}).then(deger => {
				context.commit('_pushitem', deger.data);
				return context.getters._todolist
			})
		},
		loadItems(context) {
			axios.get('http://localhost:3000/myList').then(deger => {
				deger.data.forEach(element => {
					context.commit('_pushitem', element)
				});
				return context.getters._todolist
			})
		},
		deleteItem(context, id: number) {
			axios.delete(`http://localhost:3000/myList/${id}`).then(() => {
				context.commit('_popitem', id);
				return context.getters._todolist
			})
		}
	}
}
