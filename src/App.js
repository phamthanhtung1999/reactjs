// import "./App.css";
import TodoFeature from './features/Todo/pages';
import MagicBox from './components/MagicBox';
import { Redirect, Route, Switch } from 'react-router';
import AlbumFeature from './features/Album/pages';

import { Link, NavLink } from 'react-router-dom';
import NotFound from './components/NotFound';
import { useEffect } from 'react';

import productApi from './api/productApi';
import counterFeature from './features/Counter';
import Header from 'components/Header';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />

      {/* ngoài route là những thứ dùng chung / vidu : header or footer */}
      <Switch>
        <Redirect from="/home" to="/" />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />
        <Route path="/magicbox" component={MagicBox} />
        <Route path="/" component={counterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
