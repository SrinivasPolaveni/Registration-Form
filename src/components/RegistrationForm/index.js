// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    name: '',
    name1: '',
    text: '',
    text1: '',
    isLogin: false,
    bgColor: '',
    bgColor1: '',
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {name, name1} = this.state
    if (name === '' && name1 === '') {
      this.setState({text: 'Required', text1: 'Required', isLogin: false})
    } else if (name === '' && name1 !== '') {
      this.setState({text: 'Required', text1: '', isLogin: false})
    } else if (name !== '' && name1 === '') {
      this.setState({text: '', text1: 'Required', isLogin: false})
    } else {
      this.setState({text: '', text1: '', isLogin: true})
    }
  }

  eventHandler = event => {
    const {value} = event.target
    if (value === '') {
      this.setState({text: 'Required', text1: '', bgColor: 'color'})
    } else {
      this.setState({text: '', text1: '', bgColor: ''})
    }
  }

  eventHandler1 = event => {
    const {value} = event.target
    if (value === '') {
      this.setState({text: '', text1: 'Required', bgColor1: 'color'})
    } else {
      this.setState({text: '', text1: '', bgColor1: ''})
    }
  }

  onChangePage = () => this.setState({text: '', text1: '', isLogin: false})

  logoutDetails = () => (
    <div className="logoutCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image"
      />
      <p className="paragrph">Submitted Successfully</p>
      <button type="button" className="button1" onClick={this.onChangePage}>
        Submit Another Response
      </button>
    </div>
  )

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onName1Change = event => {
    this.setState({name1: event.target.value})
  }

  loginDetails = () => {
    const {text, text1, bgColor, bgColor1} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="card1">
          <label htmlFor="name1" className="input1">
            FIRST NAME
          </label>
          <input
            type="text"
            id="name1"
            placeholder="First name"
            className={`"input" ${bgColor}`}
            onBlur={this.eventHandler}
            onChange={this.onNameChange}
          />
          <p className="paragraph2">{text}</p>
        </div>
        <div className="card1">
          <label htmlFor="name2" className="input1">
            LAST NAME
          </label>
          <input
            type="text"
            id="name2"
            placeholder="Last name"
            className={`"input" ${bgColor1}`}
            onBlur={this.eventHandler1}
            onChange={this.onName1Change}
          />
          <p className="paragraph2">{text1}</p>
        </div>
        <div className="container2">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    )
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="container">
        <div className="container1">
          <h1 className="heading">Registration</h1>
          {isLogin ? this.logoutDetails() : this.loginDetails()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
