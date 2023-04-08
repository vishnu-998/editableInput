import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  state = {isClicked: false, enter: ''}

  onChange = event => {
    this.setState({enter: event.target.value})
  }

  start = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked, enter} = this.state
    return (
      <div className="main-container">
        <div className="c-container">
          <h1 className="header">Editable Text Input</h1>
          <div className="inp-container">
            {isClicked === true ? (
              <div className="p-container">
                <p className="p">{enter}</p>
                <button type="button" className="but" onClick={this.start}>
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  className="inp"
                  value={enter}
                  onChange={this.onChange}
                />
                <button type="button" className="but" onClick={this.start}>
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default AppItem
