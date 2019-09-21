import Reflux from 'reflux';
import {ShopActions} from '../actions/shop.js';
import {getItems} from '../api/requests.js';

class ShopStore extends Reflux.Store {

    constructor(){
        super();
        // Set the initial state of the store
        this.state = {
            items: []
        }

    }

}

export default CartStore;

