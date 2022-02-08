import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddFruitModal.css';

export class AddFruitModal extends Component {
    static propTypes = {
        onAddClicked: PropTypes.func,
        onEditItemClick: PropTypes.func,
        onCloseAddFruitModalClick: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            name: props.fruit?.name || '',
            color: props.fruit?.color || '',
            price: props.fruit?.price || '',
        }
    }

    render () {
        return(
            <div className='modalForm'>
                <form onSubmit = {() => {
                    this.props.fruit?.id ?
                    this.props.onEditItemClick({...this.state, id: this.props.fruit.id}) :
                    this.props.onAddItemClick(this.state)
                    }}>
                    <p>Name:</p>
                    <input value = { this.state.name } onChange = {( event ) => this.setState ({ name: event.target.value })}/>
                    <p>Color:</p>
                    <input value = { this.state.color } onChange = {( event ) => this.setState ({ color: event.target.value })}/>
                    <p>Price:</p>
                    <input value = { this.state.price } onChange = {( event ) => this.setState ({ price: event.target.value })}/>
                    <button>{ this.props.fruit?.id ? 'Edit' : 'Add' }</button>
                    <button onClick={this.props.onCloseAddFruitModalClick}>Close</button>
                </form>
            </div>
        )
    }
}