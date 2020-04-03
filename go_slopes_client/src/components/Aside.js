
import React from 'react'

class Aside extends React.Component {

  render () {
    return (
      <aside>
        <h3>navigate</h3>
        <ul className="nav flex-column">
          <li className="nav-item" onClick={() => {this.props.handleView('home')}}>home</li>
          <li className="nav-item" onClick={() => {this.props.handleView('addReview')}}>add review</li>
        </ul>
      </aside>
    )
  }
}

export default Aside
