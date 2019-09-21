import React from 'react';
import {Link} from 'react-router-dom';

class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    }

    render(){
        return(
            <div>
                {/* This is a jsx html comment */}
                {/* You can also use Link from react-router-dom (imported above) */}
                {/* to redirect you to a specific path without browser refresh, */}
                {/* but doing it programatically I believe it has more uses */}
                <Link to='/'>Home</Link> <br /> 
                <Link to='/cart'>Cart</Link>  <br />
                Shop
            </div>
        )
    }
}

export default Shop;
