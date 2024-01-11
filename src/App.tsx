
import { Provider } from 'react-redux'
import { TodoApp } from './TodoApp'
import { store } from './reducer'

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}

export default App
