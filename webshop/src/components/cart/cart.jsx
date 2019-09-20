import React from 'react';
import Reflux from 'reflux';
import CartStore from '../../stores/cart.js';
import {CartActions} from '../../actions/cart.js';

// Reflux.Component is just a wrapper for React.Component to add stores
// more easily
class Cart extends Reflux.Component{
    constructor(props){
        super(props);
        this.state={
            currentId: 1
        };
        // Setting the Store that you want to listen to
        this.store = CartStore;
    }

    addItem(item){
        let currentId = this.state.currentId;
        // Calling a function to update the store
        CartActions.addItem(''+currentId);
        currentId++;
        this.setState({
            currentId: currentId
        });
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.addItem()}}>Add Item</button>
                {this.state.items.map( item => <p>{item}</p> )}
            </div>
        )
    }
}

export default Cart;
