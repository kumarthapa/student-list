import React from 'react'
import { NewsProvider } from "./component/context/NewsContext"
import Home from './component/Home';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
function App() {
  return (
   <>
   <Router>
   <NewsProvider>
   <Switch>
   <Route path="/" component={Home}/>
   </Switch>
   </NewsProvider>
   </Router>
   </>
  );
}
export default App;