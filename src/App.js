import React from 'react'

import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import routes from './router/index.js'
import './App.css'
import Layouts from '@/pages/layout/layout'
const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Layouts>
          {routes.map((r, key) => (
            <Route
              component={r.component}
              exact={!!r.exact}
              key={key}
              path={r.path}
            />
          ))}
        </Layouts>
      </Switch>
    </ConnectedRouter>
  )
}
/**
 * @propTypes react的类型检查
 */

App.propTypes = {
  history: PropTypes.object
}

export default App
