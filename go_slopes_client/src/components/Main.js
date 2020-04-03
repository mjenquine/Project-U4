import React from 'react'
import Review from './Review.js'
import Form from './Form.js'


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

  handleCreate = async createData => {
    let response = await fetch('/reviews',
    {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    this.props.handleView('home')
    this.setState(prevState => {
      return({ reviews: [...prevState.reviews, data]})
    })
  }
  handleUpdate = async updateData => {
    let response = await fetch (`/reviews/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    this.props.handleView('home')
    this.fetchReviews()
  }

  handleDelete = async id => {
    let response = await fetch(`/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    this.setState(prevState => {
      const reviews = prevState.reviews.filter(review => review.id !== id)
      return { reviews }
    })
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
          handleDelete={this.handleDelete}
        />
      ))
      : <Form
          handleCreate={this.handleCreate}
          handleUpdate={this.handleUpdate}
          formInputs={this.props.formInputs}
          view={this.props.view}
        />
      }
    </main>
  )
  }
}

export default Main
