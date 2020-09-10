import { defineComponent, reactive } from 'vue';

export default defineComponent({
	name: 'List',
	setup() {
		// 用reactive 包装对象使其获得响应性
		const commentDataList = reactive([
			{ username: 'Jerry', content: 'Hello' },
			{ username: 'Tomy', content: 'World' },
			{ username: 'Lucy', content: 'Good' },
		]);

		return () => (
			<div>
				{commentDataList.map((comment, i) => (
						<p>
							<i>{comment.username}</i>:{comment.content}
						</p>
				))}
			</div>
		);
	},
});
