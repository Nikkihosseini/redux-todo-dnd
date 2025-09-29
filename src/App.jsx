import ToDoApp from './Pages/ToDoApp'
import {store} from './Component/store/store'
import { Provider } from 'react-redux'
import './index.css'

function App() {
 
  return (
    <>
      <Provider store={store}>
        <ToDoApp/>
      </Provider>
    </>
  )
}

export default App
