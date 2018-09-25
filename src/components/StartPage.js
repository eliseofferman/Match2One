import React from "react"
import ".././index.css"

class StartPage extends React.Component {

  componentDidMount() {
    document.addEventListener("keypress", event => {
      const keyName = event.key

      // alertert('keypress event\n\n' + 'key: ' + keyName);
      this.handleSubmit(keyName)
    })
  }
  render() {
    return (
      <div className="startContainer">
        <h1>Welcome</h1>
        <h3>Lets set up your first campaign</h3>
        <div className="buttonContainer">
          <button className="startButton" onClick={this.handleSubmit2} type="submit">Start</button>
          <p>press ENTER </p>
        </div>
      </div>
    )
  }
  handleSubmit2= event => {
    event.preventDefault()
    this.props.history.push("/CreateCampaign")
  }

  handleSubmit = keyName => {
    // event.preventDefault();
    if (keyName === "Enter") {
      this.props.history.push("/CreateCampaign")
    }
  }
}

export default StartPage
