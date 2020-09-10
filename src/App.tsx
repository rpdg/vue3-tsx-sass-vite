import { defineComponent } from 'vue';
import HellowWorld from './components/HellowWorld';
import List from './components/List';

export default defineComponent({
	name: 'App',
	setup() {
		return () => (
			<>
				<div class='container'>
					<HellowWorld msg='Vue3 Hello world' />
          <List />
				</div>
			</>
		);
	},
});
