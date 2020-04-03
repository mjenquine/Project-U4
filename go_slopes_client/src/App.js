import React from 'react';
import Main from './components/Main.js'
import Aside from './components/Aside.js'

class App extends React.Component {
  state = {
    view: {
      page: 'home',
      pageTitle: 'Go Slopes!',
    }
  }

  handleView = (view, review) => {
    let pageTitle = ''
    switch (view) {
      case 'home':
        pageTitle = 'Go Slopes!'
        break
      case 'addReview':
        pageTitle = 'How were the slopes?'
        break
      case 'editReview':
        pageTitle = 'Update slopes'
        break
      default:
        break
    }
  
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      }
    })
  }

  render () {
    return (
      <div>
        <Aside handleView={this.handleView}/>
        <Main view={this.state.view} handleView={this.handleView}/>


      </div>
    )
  }
}


export default App
