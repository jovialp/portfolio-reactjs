import React from 'react';
import './App.css';
// import Portfolio from './components/Portfolio';
// import Post from './projects/Post';
import Album from './projects/Album'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="jumbotron text-center">React</h1>

          <Album />


        </div>
      </div>
    </div>
  );
}


export default App;
