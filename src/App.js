import React, { Component } from 'react';
import Search from "./components/search/Search";
import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component{
  render(){
    return(
      <div>
      <Search />
      </div>
    )
  }
}
export default App;