import React, { Component } from 'react';
import { Route } from './components/Route'



class App extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Welcome to BounceCode</h1>
        </center>

         <ul> <li><a href="/atlantic"><code>/atlantic</code></a></li> </ul>
         <ul> <li><a href="/pacific"><code>/pacific</code></a></li> </ul>


         <Route path = "/atlantic" component={Atlantic}/>
         <Route path = "/pacific" component={Pacific}/>
      </div>
    );
  }
}


const Atlantic = () => (
  <div>
    <h3>Atlantic Ocean</h3>
    <p>
      The Atlantic Ocean covers approximately 1/5th of the surface of the earth.
    </p>
  </div>
);

const Pacific = () => (
  <div>
    <h3>Pacific Ocean</h3>
    <p>
      Ferdinand Magellan, a Portuguese explorer, named the ocean 'mar pacifico'
      in 1521, which means peaceful sea.
    </p>
  </div>
);



export default App;
