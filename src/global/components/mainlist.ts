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
		}
	},
	actions : {
		pushItem(context , eleman: string) {
			const _id = new Date().getTime();
			axios.post('http://localhost:3000/myList', {
				id: _id,
				text: eleman
			}).then(deger => {
				console.log(deger.data);
				context.commit('_pushitem', deger.data);
			})
		}
	}
}
