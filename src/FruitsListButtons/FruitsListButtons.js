import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FruitsListButtons extends Component {
    render () {
        return (
            <div>
                <button 
                    onClick= { this.props.onAddClicked } > Add Fruit 
                </button>
            </div> 
        )
    }
}


