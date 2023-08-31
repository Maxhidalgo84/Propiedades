import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import { AppRouter } from "./routes/appRouter"


function App() {

  //const isAuthenticated = false

  

  return (
    <>
      <Provider store={store}>

        <BrowserRouter>

          <AppRouter />

        </BrowserRouter>


      </Provider>
     
    </>
  )
}

export default App
