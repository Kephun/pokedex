import React from "react";
import './App.css';
import General from './components/general'
export default App;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      villager: [],
      DataIsLoaded: false
    }
  }

  componentDidMount() {
    fetch ('http://acnhapi.com/v1/villagers/ant00')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          villager: json,
          DataIsLoaded: true
        })
    })
  }

  render() {

    const { DataIsLoaded, villager } = this.state;
    if (!DataIsLoaded) return <div>
      <h1>Please wait some time..</h1> </div>;

    return (
      <div>
        {villager.id}
      </div>
    );
  }
}
