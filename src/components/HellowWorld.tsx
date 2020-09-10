import { computed, defineComponent, ref } from 'vue';
import styles from './HelloWorld.module.scss';

export default defineComponent({
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			require: false,
			default: 'This is title.',
		},
	},
	setup(props) {
		const count = ref(0);

		const inc = () => {
			count.value++;
		};

		// 使用computed
		const doubleTimes = computed(() => {
			return count.value * 2;
		});

		return () => (
			<>
				<h1>{props.msg}</h1>
				<button
					class={styles.btnCounter}
					style={{
						fontSize: '18px',
					}}
					onClick={inc}
				>
					count is: {count.value} , double is {doubleTimes.value}
				</button>
			</>
		);
	},
});
