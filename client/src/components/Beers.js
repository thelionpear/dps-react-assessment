import React from 'react';
import axios from 'axios'; 

class Beers extends React.Component {
    state = { beers: [] }

    componentDidMount() {
        axios.get('/api/all_beers')
            .then( res => this.setState({ beers: res.data }) )
            debugger  
    }

    render() {
        const beers = this.state;
            return (
                <ul>
                    { beers.map( beer =>
                        <li key={beer.id}>
                            { beer.name }
                            { beer.description }
                            
                        </li>
                    )}
                </ul>
            )
    }

}

export default Beers; 