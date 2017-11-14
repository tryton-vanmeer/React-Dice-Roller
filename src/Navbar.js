import React from 'react';
import DiceD4Icon from 'mdi-react/DiceD4Icon'
import DiceD6Icon from 'mdi-react/DiceD6Icon'
import DiceD8Icon from 'mdi-react/DiceD8Icon'
import DiceD10Icon from 'mdi-react/DiceD10Icon'
import DiceD20Icon from 'mdi-react/DiceD20Icon'
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <span id="navbar-title">Dice Roller</span>

                <ul>
                    <li><DiceD4Icon /></li>
                    <li><DiceD6Icon /></li>
                    <li><DiceD8Icon /></li>
                    <li><DiceD10Icon /></li>
                    <li><DiceD20Icon /></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
