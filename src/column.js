import React from "react";
import './App.css';


class Column extends React.Component {
    render() {
        if (this.props.column) {
            return (
                <div className="column-box">
                    <h4>{this.props.colNum}</h4>
                    {
                        this.props.column.map(colData => {
                            return (
                                <div>
                                    <button onClick={() => this.props.handleClick('back', colData, this.props.colNum)}>back</button>
                                    <span>Box #{colData}</span>
                                    <button onClick={() => this.props.handleClick('forward', colData, this.props.colNum)}>forward</button>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }
}

export default Column;