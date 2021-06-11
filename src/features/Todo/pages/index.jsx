import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFound from '../../../components/NotFound';
import DetailsPage from './DetailsPage';
import ListPage from './ListPages';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      Todo Share UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailsPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
