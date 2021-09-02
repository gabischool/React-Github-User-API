


import React from "react"
import Profile from "./components/Profile"
import axios from "axios"
import "./styles.css";

class App extends React.Component {

  state = {
    users: [],
    anotherstate: []
  }

  // const [users, setUsers] = useState([])

  componentDidMount() {

    
    axios.get('https://api.github.com/users/duraanali ')
    .then(response => {
      // console.log(response.data)

    
      this.setState({
        ...this.state.users,
        users:response.data,
      })
  
    })
    .catch(error => {
      console.log( "something went wrong", error)
    });


   
    


   


  }
profile
  render() {
    console.log(this.state.users)

    
  return (
    <div className="container">
          <h1>List of profiles</h1>
      <div className="App">
          <Profile profilles={this.state.users} />
          </div>
      </div>
  );
  }
}

export default App;