import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    removeCharacter = (index) => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            }),
        })
    }
    state = {
        characters: [{
            firstName: 'Larry',
            lastName: 'Page',
        },
        {
            firstName: 'Ada',
            lastName: 'Lovelace',

        },
        {
            firstName: 'Alan',
            lastName: 'Turing',
        },],
    }

    render() {
        const { characters } = this.state;
        return (
            <div className="container">
                <Table characterData={characters}
                    removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App;
