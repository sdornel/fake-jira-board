import React from "react";
import Column from "./column";


class ColumnContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            column1: [1, 2, 3],
            column2: [4, 5],
            column3: [],
            columns: [1,2,3]
        }
    }

    handleClick = (direction, box, colNum) => {
        let addToDifferentColumn;
        if (direction === 'back' && colNum > 1) {
            if (colNum === 2) {
                addToDifferentColumn = this.state[`column${colNum}`].splice(this.state.column2.indexOf(box), 1);
                this.setState({ column1: [...this.state.column1, addToDifferentColumn[0]] })
            } else if (colNum === 3) {
                addToDifferentColumn = this.state[`column${colNum}`].splice(this.state.column3.indexOf(box), 1);
                this.setState({ column2: [...this.state.column2, addToDifferentColumn[0]] }) 
            }
        } else if (direction === 'forward' && colNum < 3) {
            if (colNum === 1) {
                addToDifferentColumn = this.state[`column${colNum}`].splice(this.state.column1.indexOf(box), 1);
                this.setState({ column2: [...this.state.column2, addToDifferentColumn[0]] })
            } else if (colNum === 2) {
                addToDifferentColumn = this.state[`column${colNum}`].splice(this.state.column2.indexOf(box), 1);
                this.setState({ column3: [...this.state.column3, addToDifferentColumn[0]] }) 
            }
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.columns.map((colNum, index) => {
                        return (
                            <div>
                                <br />
                                <Column colNum={colNum} column={this.state[`column${index+1}`]} key={index} handleClick={this.handleClick} />
                            </div>
                            
                        )
                    })
                }
            </div>
        )
    }
}

export default ColumnContainer;