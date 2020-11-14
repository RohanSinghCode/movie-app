import React from 'react';
import axios from 'axios';

import Search from './components/Search';
import Results from './components/results';
import Popup from './components/popup';


import './index.css';

class App extends React.Component {

  constructor()
  {
    super();
    this.state = {
      s:"",
      results: [],
      selected:{}
    }

  }

  

  search = e => {
    var url = " http://www.omdbapi.com/?i=tt3896198&apikey=e6c14f3f";
    if(e.key === "Enter"){
      axios.get(url+"&s="+this.state.s).then(data=>{
        var results = data.data.Search;
        console.log(results)
        this.setState(prevState =>{
          return {
            ...prevState,
            results:results,
          }
        })
      }).catch(err => console.log(err))
    }
  }

  openPopup = id => {
    var url = " http://www.omdbapi.com/?&apikey=e6c14f3f";
    axios.get(url+"&i="+id).then(data => {
      let result = data.data;
      console.log(data)
      this.setState(prevState => {
        return{
          ...prevState,
          selected:result
        }
      })
    })
  }

  closePopup = () => {
    this.setState(prevState=> {
      return{
        ...prevState,
        selected:{}
      }
    })
  }


  handleChange = e => {
    let s = e.target.value

    this.setState(prevState=>{
      return {
        ...prevState,
        s:s
      }
    })

  }

  render() {
    return (
      <div>
      <header>
      <h1>Movie Database</h1>
      </header>
      <main>
        <Search  handleChange={this.handleChange} search={this.search} />
        <Results results={this.state.results} openPopup = {this.openPopup} />
        {
          (typeof this.state.selected.Title != "undefined"?<Popup selected={this.state.selected} closePopup={this.closePopup}/>:false)
        }
      </main>
      </div>
    );
  }

}

export default App;
