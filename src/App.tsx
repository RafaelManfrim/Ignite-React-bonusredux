import { Provider } from 'react-redux'
import { Catalog } from './components/Catalog';
import store from './store';

export const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<Catalog />
			</div>
		</Provider>
	);
}
