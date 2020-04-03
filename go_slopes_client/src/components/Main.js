import React from 'react'

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
        <h1>Hi</h1>

      </main>
    )
  }
}

export default Main
