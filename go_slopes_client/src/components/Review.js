import React from 'react'

class Review extends React.Component {

  render () {
    return (
      <article>
        <div>
          <h1>{this.props.review.name}</h1>
        </div>
        <div>
          {this.props.review.city}
        </div>
        <div>
          {this.props.review.state}
        </div>
        <div>
          {this.props.review.runs}
        </div>
        <div>
          {this.props.review.elevation}
        </div>
        <div>
          {this.props.review.lift}
        </div>
        <div>
          {this.props.review.bar}
        </div>
        <div>
          <ul>
            <li onClick={() => {this.props.handleView('editReview', this.props.review)}}>edit review</li>
            <li onClick={() => {this.props.handleDelete(this.props.review.id)}}>delete review</li>
          </ul>
        </div>
      </article>
    )
  }
}

export default Review
