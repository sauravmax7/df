import React from "react";
import { Switch, Route} from "react-router-dom";

//import the components
import Main from "./components/main";

import Tech from "./components/tech";
import AllNews from "./components/AllNews";
import SearchByCity from "./components/pages/SearchByCity";

const Routes = () => (

    
   
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/SearchByCity" component={SearchByCity}/>
            <Route exact path="/tech" component={Tech} />
            <Route exact path="/AllNews" component={AllNews} />
        </Switch>
       
) 

export default Routes;