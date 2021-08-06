import React from 'react';
import './App.css';
import Body from './components/Body/Body';


class App extends React.Component {
    render(){
      return(
        <div className="todo">
         <Body />
        </div>
        
      );
    }
}
export default App
