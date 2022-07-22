import { useState } from 'react';
import classes from './Counter.module.css';
import cx from 'classnames';

function Counter(): JSX.Element {
  const [counter, setCounter] = useState(0);
  const incButtonIsDisabled = counter === 5;
  const resetButtonIsDisabled = counter === 0;

  const incrementHandler = () => {
    setCounter((prev) => prev + 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };

  const counterClasses = cx(classes['counter-value'], {
    [classes.error]: incButtonIsDisabled,
  });

  return (
    <div className={classes.root}>
      <div className={counterClasses}>
        <span>{counter}</span>
      </div>
      <div className={classes['action-buttons']}>
        <button disabled={incButtonIsDisabled} onClick={incrementHandler} className={classes.inc}>
          inc
        </button>
        <button disabled={resetButtonIsDisabled} onClick={resetHandler} className={classes.reset}>
          reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
