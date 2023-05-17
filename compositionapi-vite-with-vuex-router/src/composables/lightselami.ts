import {ref, watch} from 'vue'


export default function() {

	const nbr = ref(1)
	const printodd = ref('odd')

	watch(nbr, (newvaue) => {
		if (newvaue % 2 !== 0)
		printodd.value = 'odd'
		else
		printodd.value = "even"
	});

	return { nbr, printodd };
}