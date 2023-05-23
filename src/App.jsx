import './App.css';
import CardList from './Components/Card-list/Card-list.component';
import { Component } from 'react';
import SearchBox from './Components/Search-bar/Search-bar.component';

class App extends Component {

  /* - (1) The contructor method is run before anything else. It is used to initialize the state of the component.
     - This where you initialize the state of the component. */

  constructor() { // This method is called when an instance of this class is created.
    super();      // Calls the constructor method of the Component class.

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  /* - (3) This method is run after the component is mounted for the first time.
     - This method is called once, when the component is mounted. Generally, this is where you would make API calls. */
  
    componentDidMount() {     
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () =>{
            return { monsters: users }
          },
          //() => console.log(this.state.monsters)
        )
      )
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField: searchField }
    });
  }

  
  /*- (2) Render runs after the constructor method. It is called whenever the state changes.
    - Render is a method of the Component class. React renders whatever is returned by this method. */

  render() {

    const {monsters, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    /*Components rerender base on two conditions, when setState is called & when props cheanged.*/
    return (
      <div className="App">
        <h1 className='app-title'>Humans Rolodex</h1>
        <SearchBox
          className='search-box-personalize'
          onChageHandler={onSearchChange}
          placeholder='Search Monsters...'
        />
        <CardList monsters={filteredMonsters}/>
      </div>
      );
  }
}

export default App;

// The react class component rerenders whenever the state changes. The original object of th state is replace by a new object.