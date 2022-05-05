import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux stuff
import { createStore } from 'redux';
import reducer from './reducer';
// store - stores data, think of state
// reducer - function that used to update store
// state - old state/state before update
// action -  what happened/ what update
// return update or old state

// dispatch method - send actions to the store
// actions (objects) - must have type property - what kind of action
// DON'T MUTATE THE STATE - redux built on immutability (copy)
// ------------------REACT - REDUX --------------------------------
// When working with react-redux look for Provider - wraps app
// connect - used in components that would want to access the store, very similar to context-api
import { Provider } from 'react-redux';

// initial store
const initialStore = {
	cart: cartItems,
	total: 105,
	amount: 5,
};

const store = createStore(reducer, initialStore);

function App() {
	// cart setup

	return (
		<Provider store={store}>
			<Navbar />
			<CartContainer />
		</Provider>
	);
}

export default App;
