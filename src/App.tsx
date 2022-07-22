import { Counter } from 'components/Counter';
import classes from './App.module.css';

function App(): JSX.Element {
  return (
    <div className={classes.root}>
      <Counter />
    </div>
  );
}

export default App;
