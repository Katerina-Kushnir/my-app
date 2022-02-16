import React from 'react';

/*export class FruitsListButtons extends Component {
    render () {
        return (
            <div>
                <button 
                    onClick= { this.props.onAddClicked } > Add Fruit 
                </button>
            </div> 
        )
    }
}*/

export const FruitsListButtons = (props) => {
    return (
        <div>
            <button 
                onClick= { props.onAddClicked } > Add Fruit 
            </button>
        </div> 
    )
}