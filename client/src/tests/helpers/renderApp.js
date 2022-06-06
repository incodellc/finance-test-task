import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import store from '../../store'
import App from '../../App'

export const renderApp = (component, initRoute) => {
   return render(
      <Provider store={store}>
         <MemoryRouter initialEntries={initRoute}>
            <App />
            {component}
         </MemoryRouter>
      </Provider>
   )
}
