import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import { increment, decrement, add, subtract, showResult, deleteResult } from '../../store/actions/index';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.showResult(this.props.ctr)}>Show Result</button>
                <ul>
                    {this.props.rslt.map(r => <li onClick={() => this.props.deleteResult(r.id)} key={r.id}>{r.result}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        rslt: state.res.result
    };
};

const mapDispatchToProps = dispatch => {
   return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(10)),
    onSubtractCounter: () => dispatch(subtract(10)),
    showResult: (res) => dispatch(showResult(res)),
    deleteResult: (id) => dispatch(deleteResult(id))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);