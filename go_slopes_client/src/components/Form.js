import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      city: '',
      state: '',
      runs: '',
      elevation: '',
      lift: '',
      bar: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.view.page === 'addReview') {
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editReview') {
      this.props.handleUpdate(this.state)
    }
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input type="text" placeholder="Slope Name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          city
          <input type="text" placeholder="city" id="city" value={this.state.city} onChange={this.handleChange}/>
        </label>
        <label>
          state
          <input type="text" placeholder="state" id="state" value={this.state.state} onChange={this.handleChange}/>
        </label>
        <label>
          runs
          <input type="text" placeholder="runs" id="runs" value={this.state.runs} onChange={this.handleChange}/>
        </label>
        <label>
          elevation
          <input type="text" placeholder="elevation" id="elevation" value={this.state.elevation} onChange={this.handleChange}/>
        </label>
        <label>
          lift
          <input type="text" placeholder="lift" id="lift" value={this.state.lift} onChange={this.handleChange}/>
        </label>
        <label>
          bar
          <input type="text" placeholder="bar" id="bar" value={this.state.bar} onChange={this.handleChange}/>
        </label>

        <input type="submit" value="share"/>
      </form>
    )
  }
}
export default Form
