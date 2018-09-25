import React from "react"

class SummaryPage extends React.Component {

  componentDidMount() {
    document.addEventListener("keypress", event => {
      const keyName = event.key

      // alertert('keypress event\n\n' + 'key: ' + keyName);
      this.handleSubmit(keyName)
    })
  }

  render() {
    return (
      <div className="summaryContainer">
        <h1>Summary page</h1>
        <div className="whiteBox">
          <h3>Campaign model</h3>
          <h4 className="light">{this.props.campaign}</h4>
          <h3>Daily Budget</h3>
          <h4 className="light">{this.props.budget}</h4>
        </div>
        <div className="buttonContainer2">
          <button className="startButton" onClick={this.handleSubmit2} type="submit">Continue</button>
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

export default SummaryPage
