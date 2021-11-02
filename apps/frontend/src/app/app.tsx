import { Editor, Layout } from "@jscontainer/ui";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Editor />
            </Layout>
          </Route>
          <Route path="/c/:slug">
            <Layout>
              <Editor />
            </Layout>
          </Route>
          <Route path="*">Not found</Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
