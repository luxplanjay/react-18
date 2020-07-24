import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../redux/counter';

function CounterButton({ clicks, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Кликнули {clicks} раз
    </button>
  );
}

const mapStateToProps = state => ({
  clicks: state.counter.value,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton);
