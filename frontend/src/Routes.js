import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewContact } from './pages/NewContact';
import { EditContact } from './pages/EditContact';

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
