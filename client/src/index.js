import reactDom from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './redux/reducers/index';

//redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(
    applyMiddleware(thunk)
));

reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);