import React from "react"
import { BrowserRouter, Route, Redirect} from "react-router-dom"
import StartPage from "./StartPage.js"
import SummaryPage from "./SummaryPage.js"
import CreateCampaignPage from "./CreateCampaignPage.js"

import ReallySmoothScroll from "really-smooth-scroll"

ReallySmoothScroll.shim();

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
      <BrowserRouter>
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
          {/* <Route exact path="/Summary" component={SummaryPage} /> */}
        </div>
      </BrowserRouter>
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
