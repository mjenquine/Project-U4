import React from 'react'
import Review from './Review.js'


class Main extends React.Component {
  state = {
    reviews: []
  }

  fetchReviews = async () => {
    let response = await fetch('/reviews')
    let data = await response.json()
    console.log(data)
    this.setState({ reviews: data})
  }

  componentDidMount() {
    this.fetchReviews()
  }

  render () {
  return (
    <main>
      <h1>{this.props.view.pageTitle}</h1>
      {this.props.view.page === 'home'
      ? this.state.reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleView={this.props.handleView}
        />
      ))
      : <Form/>
      }
    </main>
  )
  }
}

export default Main
