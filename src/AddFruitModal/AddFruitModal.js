import React, { useState } from 'react';
import './AddFruitModal.css';

/*
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
            category: props.fruit?.category || '',
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
                    <p>Category:</p>
                    <input value = { this.state.category } onChange = {( event ) => this.setState ({ category: event.target.value })}/>
                    <p>Price:</p>
                    <input value = { this.state.price } onChange = {( event ) => this.setState ({ price: event.target.value })}/>
                    <button>{ this.props.fruit?.id ? 'Edit' : 'Add' }</button>
                    <button onClick={this.props.onCloseAddFruitModalClick}>Close</button>
                </form>
            </div>
        )
    }
}
*/



export const AddFruitModal = (props) => {
    const [name, setName] = useState({
        name: props.fruit?.name || '',
        category: props.fruit?.category || '',
        price: props.fruit?.price || '',
    });

    return(
        <div className='modalForm'>
            <form onSubmit = {() => {
                props.fruit?.id ?
                props.onEditItemClick({...name, id: props.fruit.id}) :
                props.onAddItemClick(name)
                }}>
                <p>Name:</p>
                <input value = { name.name } onChange = {( event ) => setName ( { name: event.target.value } )}/>
                <p>Category:</p>
                <input value = { name.category } onChange = {( event ) => setName ( { category: event.target.value } )}/>
                <p>Price:</p>
                <input value = { name.price } onChange = {( event ) => setName ( { price: event.target.value } )}/>
                <button>{ props.fruit?.id ? 'Edit' : 'Add' }</button>
                <button onClick={props.onCloseAddFruitModalClick}>Close</button>
            </form>
        </div>
    )
}
