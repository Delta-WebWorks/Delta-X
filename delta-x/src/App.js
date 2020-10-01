import React,{Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import landing from './components/landing/landing';

class App extends Component {

  constructor() {
      super();
      this.state = { game_selected: null };
  }

  render(){
    return(
      //add your component to this by Route path = "/{component name}"
      
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={landing} exact/>
          </Switch>
        </div>
      </BrowserRouter>


    );
  }
}

export default App;
