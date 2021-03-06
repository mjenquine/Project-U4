import React from 'react';
import Main from './components/Main.js'
import Aside from './components/Aside.js'

class App extends React.Component {
  state = {
    view: {
      page: 'home',
      pageTitle: 'Reviews',
    },
    formInputs: {
      name: null,
      city: null,
      state: null,
      runs: null,
      elevation: null,
      lift: null,
      bar: null,
      id: null
    }
  }

  handleView = (view, review) => {
    let pageTitle = ''
    let formInputs = {
      name: '',
      city: '',
      state: '',
      runs: '',
      elevation: '',
      lift: '',
      bar: '',
      id: null
    }
    switch (view) {
      case 'home':
        pageTitle = 'Reviews!'
        break
      case 'addReview':
        pageTitle = 'How were the slopes?'
        break
      case 'editReview':
        pageTitle = 'Update slopes'
        formInputs = {
          name: review.name,
          city: review.city,
          state: review.state,
          runs: review.runs,
          elevation: review.elevation,
          lift: review.lift,
          bar: review.bar,
          id: review.id
        }
        break
      default:
        break
    }

    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }

  render () {
    return (
      <>
        <header>
          <h1 className="main-title">Slope Reviews</h1>
        </header>
        <div className="main-page-layout">
            <Aside handleView={this.handleView}/>
            <Main view={this.state.view} handleView={this.handleView} formInputs={this.state.formInputs}/>
        </div>
        <footer>
        </footer>
      </>
    )
  }
}


export default App
