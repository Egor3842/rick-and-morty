import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LeftSide from './layouts/LeftSide/LeftSide';
import LoadingPage from './ui/LoadingPage/LoadingPage';
import cl from './App.module.scss';
import RightSide from './layouts/RightSide/RightSide';
import MainPage from './routes/MainPage/MainPage';
import AboutPage from './routes/AboutPage/AboutPage';

const App = () => {
  return (
    <div className={cl.container}>
      <Suspense fallback={<LoadingPage />}>
        <LeftSide />
        <RightSide>
          <Switch>
            <Route path="/about" exact component={AboutPage} />
            <Route path="/" exact component={MainPage} />
          </Switch>
        </RightSide>
      </Suspense>
    </div>
  );
}

export default App;
