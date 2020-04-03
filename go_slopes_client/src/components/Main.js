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
      {this.state.reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
        />
      ))}
    </main>
  )
}
}

export default Main
