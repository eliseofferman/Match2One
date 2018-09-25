import React from "react"

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
      <div>
        <button onClick={this.handleSubmit2} type="submit">Send</button>
      </div>
    )
  }
  handleSubmit2= event => {
    event.preventDefault()
    console.log("hej2")
    this.props.history.push("/CreateCampaign")
  }

  handleSubmit = keyName => {
    // event.preventDefault();
    if (keyName === "Enter") {
      console.log("enter press here! ", keyName)
      this.props.history.push("/CreateCampaign")
    } else {
      console.log("here! ", keyName)
    }
  }
}

export default StartPage
