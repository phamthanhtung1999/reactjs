import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

CounterFeature.propTypes = {};

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function CounterFeature(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);

  const handelIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };

  const handelDecreaseClick = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      counter Feature: {count}
      <div>
        <Button className={classes.root} onClick={handelIncreaseClick}>
          Increase
        </Button>
        <Button className={classes.root} onClick={handelDecreaseClick}>
          Decrease
        </Button>
      </div>
    </div>
  );
}

export default CounterFeature;
