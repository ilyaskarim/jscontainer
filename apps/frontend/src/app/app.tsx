import { Editor, Layout, NotFound } from "@jscontainer/ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout showFooter={false} isContainerPage={true}>
              <Editor />
            </Layout>
          </Route>
          <Route path="/c/:slug">
            <Layout showFooter={false}>
              <Editor />
            </Layout>
          </Route>
          <Route path="*">
            <Layout isContainerPage={false}>
              <NotFound></NotFound>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
