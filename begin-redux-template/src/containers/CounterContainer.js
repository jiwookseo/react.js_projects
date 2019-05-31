// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react'
import Counter from 'components/Counter'
import { connect } from 'react-redux'
import * as counterActions from 'store/modules/counter'
import { bindActionCreators } from 'redux';

export class CounterContainer extends Component {
    handleIncrement = () => {
      const { CounterActions } = this.props;
        CounterActions.increment();
    }
    handleDecrement = () => {
        const { CounterActions } = this.props;
        CounterActions.decrement();
    }
    render() {
      const { handleIncrement, handleDecrement } = this;
      const { number } = this.props;

      return (
        <Counter
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          number={number}
        />
      );
    };
};

export default connect(
  (state) => ({
    number: state.counter.number
  }), 
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer);
