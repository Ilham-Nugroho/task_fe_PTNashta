import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { NavigationBar } from "./header/NavigationBar";
import { AddEvent } from "./pages/AddEvent";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0,
        staleTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-event" component={AddEvent} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
