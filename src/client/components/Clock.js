import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import '../public/css/main.css';

//render(<App name={name}/>, document.getElementById('root'));

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    /* Se ejecuta la primera vez que se renderiza el DOM */
    componentDidMount(){
        this.timerID = setInterval( ()=> this.tick(),1000)
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  render(
    <Clock />,
    document.getElementById('root')
  );
  
  