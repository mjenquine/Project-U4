
import React from 'react'

class Aside extends React.Component {

  render () {
    return (
      <aside>
        <h1>NAVIGATE</h1>
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>home</li>
          <li onClick={() => {this.props.handleView('addReview')}}>add review</li>
        </ul>
      </aside>
    )
  }
}

export default Aside
