import React from "react"
import { BrowserRouter, Route, Redirect} from "react-router-dom"
import StartPage from "./StartPage.js"
import SummaryPage from "./SummaryPage.js"
import CreateCampaignPage from "./CreateCampaignPage.js"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/CreateCampaign" component={CreateCampaignPage} />
          <Route exact path="/Summary" component={SummaryPage} />
          {/* <StartPage />
            <CreateCampaignPage />
          <SummaryPage /> */}

        </div>
      </BrowserRouter>
    )
  }

}

export default App
