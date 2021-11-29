import checkAuth from 'src/utils/checkAuth';

import { Route, Redirect } from 'react-router';

const privateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => (
        checkAuth() ? (
          <Component {...props} parentMenu={props.menu} />
        ) : (
          <Redirect to='/login' />
        )
      )}
    />
  )
}

export default privateRoute;