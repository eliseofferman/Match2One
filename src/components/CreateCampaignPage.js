import React from "react"

class CreateCampaignPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      choiceQ1: null,
    }
  }
  componentDidMount() {
    document.addEventListener("keypress", event => {
      const keyName = event.key

      alert('keypress event\n\n' + 'key: ' + keyName);
      this.select1(keyName)
    })
  }

  render() {
    return (
      <div className='question1Container'>
        <h1>What kind of users do you want to target?</h1>
        <h4>💡 Tip. Unless you have really specific needs, alternative C gives you the best reach and performance</h4>
        <div className='boxContainer'>
          <div className={this.state.choiceQ1 === "A" ? 'question1BoxSelected': 'question1Box'} onClick={e => this.select1("A")}>
            {/* className={this.props.time ? "active" : "not-active"} */}
            <h3>New customers</h3>
            <h5>Target users that are likely to become new customers. This is called a prospecting campaign.</h5>
            <p>Press A</p>
          </div>
          <div className={this.state.choiceQ1 === "B" ? 'question1BoxSelected': 'question1Box'} onClick={e => this.select1("B")}>
            <h3>Current website visitors</h3>
            <h5>Users that visited your website but left without buying. This is called a retargeting campaign.</h5>
            <p>Press B</p>
          </div>
          <div className={this.state.choiceQ1 === "C" ? 'question1BoxSelected': 'question1Box'} onClick={e => this.select1("C")}>
            <h3>New customers & Current website visitors</h3>
            <h5>Use a combination of Prospecting and Retargeting to reach new users as well as current visitors.
            </h5>
            <p>Press C</p>
          </div>
        </div>
      </div>
    )
  }

  select1 = letter => {
    if (letter.toUpperCase() === "A") {
      this.setState({
        choiceQ1: letter,
      })
    } else if (letter.toUpperCase() === "B") {
      this.setState({
        choiceQ1: letter,
      })
    } else if (letter.toUpperCase() === "C") {
      this.setState({
        choiceQ1: letter,
      })
    }
  }

}

export default CreateCampaignPage
