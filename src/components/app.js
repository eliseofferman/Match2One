import React from "react"
import { HashRouter, Route } from "react-router-dom"
import ReallySmoothScroll from "really-smooth-scroll"
import StartPage from "./StartPage.js"
import SummaryPage from "./SummaryPage.js"
import CreateCampaignPage from "./CreateCampaignPage.js"

ReallySmoothScroll.shim()

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      budget: null,
      campaign: null
    }
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={StartPage} />
          <Route
            path="/CreateCampaign"
            render={routeProps => (
              <CreateCampaignPage
                setBudget={this.setBudget}
                {...routeProps} />
            )} />

          <Route
            path="/Summary"
            render={routeProps => (
              <SummaryPage
                budget={this.state.budget}
                campaign={this.state.campaign}
                {...routeProps} />
            )} />
        </div>
      </HashRouter>
    )
  }

  setBudget = (b, c) => {
    this.setState({
      budget: b,
      campaign: c
    })
  }

}

export default App
