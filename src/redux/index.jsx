import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';

const middleware = (store) => (next) => (action) => {
	if (typeof action === 'function') {
		return action(store.dispatch);
	} else {
		next(action);
	}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(middleware)));
export default store;
