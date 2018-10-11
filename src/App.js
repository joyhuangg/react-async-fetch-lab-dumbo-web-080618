// create your App component here
import Button from './components/Button'
import React, {Component} from 'react'
import ExampleComponent from './components/ExampleComponent'
import Greeting from './components/Greeting'

class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(people => {
        this.setState({peopleInSpace: people})
        })
  }
  
  render() {
    return (
      <div>
        <Button />
        <ExampleComponent />
        <Greeting />
      </div>
    )
  }
}

export default App
