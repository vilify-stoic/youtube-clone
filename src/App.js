import './App.css';
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import store from './utils/store';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchedVideoContainer from './components/SearchedVideoContainer';


const appRouter = createBrowserRouter([{
  path: "/",
  element:  <> 
    <Head/> 
    <Body/>
   </>,
  
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    },
    {
      path: "results",
      element: <SearchedVideoContainer/>
    }
  ]
}])

function App() {
  return (
    <Provider store = {store}>
      <div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
