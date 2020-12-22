import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css"
import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/AllNews/main";
import SearchByCategories from "./components/AllNews/SearchByCategories";
import Tech from "./components/AllNews/tech";
import AllNews from "./components/AllNews/AllNews";
import FullPage from "./components/AllNews/Layout/FullPage";

import ListNews from "./components/ReporterNews/ReporterCityNews";
import { ListNewsByReporter } from "./components/ReporterNews/ReporterNews";
import NewsAdd from "./components/AddNews/AddNews";
import { Login } from "./components/Login/Login";
import { NewPassword } from "./components/Password/New_Password";
import { ForgotPassword } from "./components/Password/Forgot_Password";
import { ReporterComponent } from "./components/ReporterDashboard/ReporterDashboard";

import { Provider } from "react-redux";
import Store from "./store/store";
import SearchByCity from "./components/AllNews/SearchByCity";
import { Footer } from "./components/Footer/Footer";
import Index from "./components/AdminDashboard/Index";
import RegisterUser from "./components/Register/RegisterUser";
import { ReporterHeader } from "./components/ReporterDashboard/ReporterHead/ReporterHeader";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={AllNews} />
            <Route exact path="/SearchByCity" component={SearchByCity} />
            <Route exact path="/tech" component={Tech} />
            <Route exact path="/AllNews" component={AllNews} />
            <Route exact path="/main" component={Main} />
            <Route
              exact
              path="/SearchByCategories"
              component={SearchByCategories}
            />
            <Route exact path="/logout" component={ReporterHeader}></Route>
            <Route exact path="/FullPage/:news_id" component={FullPage} />
            <Route path="/login" component={Login} />
            <Route path="/reporter" component={ReporterComponent}></Route>
            <Route exact path="/news/city" component={ListNews} />
            <Route exact path="/news/reporter" component={ListNewsByReporter} />
            <Route exact path="/addn" component={NewsAdd} />
            <Route path="/login" component={Login} />
            <Route path="/forgotpassword" component={ForgotPassword}></Route>
            <Route path="/newpassword" component={NewPassword}></Route>
            <Route path="/admin" component={Index}></Route>
            <Route path="/register" component={RegisterUser}></Route>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
