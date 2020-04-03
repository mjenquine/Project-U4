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
  componentDidMount() {
    this.setState({
      name: this.props.formInputs.name,
      city: this.props.formInputs.city,
      state: this.props.formInputs.state,
      runs: this.props.formInputs.runs,
      elevation: this.props.formInputs.elevation,
      lift: this.props.formInputs.lift,
      bar: this.props.formInputs.bar,
      id: this.props.formInputs.id
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group ">
          <label>
            Mountain Name
            <input className="form-control" type="text" placeholder="Bolton Valley" id="name" value={this.state.name} onChange={this.handleChange}/>
          </label>
        </div>
        <div className="form-group">
          <label>
            Location City
            <input className="form-control" type="text" placeholder="Bolton" id="city" value={this.state.city} onChange={this.handleChange}/>
          </label>
        </div>
        <div className="form-group">
          <label>
            Location State
            <input className="form-control" type="text" placeholder="VT" id="state" value={this.state.state} onChange={this.handleChange}/>
          </label>
        </div>
        <div className="form-group">
          <label>
            Number of Runs
            <input className="form-control" type="text" placeholder="ie. 71" id="runs" value={this.state.runs} onChange={this.handleChange}/>
          </label>
        </div>
        <div className="form-group">
          <label>
            Max Elevation
            <input className="form-control" type="text" placeholder="7000" id="elevation" value={this.state.elevation} onChange={this.handleChange}/>
          </label>
        </div>
        <div className="form-group">
          <label>
            Lift Quality - Time Spent in Lines
            <input className="form-control" type="text" placeholder="ie Great lifts. High speed quads kept the lines short" id="lift" value={this.state.lift} onChange={this.handleChange}/>
          </label>
        </div>
        <div className="form-group">
          <label>
            Bar - Food Scene
            <input className="form-control" type="text" placeholder="Awesome food. Great drinks and people" id="bar" value={this.state.bar} onChange={this.handleChange}/>
          </label>
        </div>
        <input type="submit" className="btn btn-primary" value="share"/>
      </form>
    )
  }
}
export default Form
