import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home/index.js';
import Quiz from './components/quiz/index.js';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </>
  );
}

export default App;
