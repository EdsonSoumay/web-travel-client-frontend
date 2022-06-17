import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './assets/scss/style.scss'
import LandingPage from "pages/LandingPage";
import  DetailsPage  from "pages/DetailsPage";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
       <Router>
         <Route exact path = "/" component = {LandingPage}/>
         <Route exact path = "/properties/:id" component = {DetailsPage}/>
         {/* <Route exact path = "/example" component = {Example}/> */}
       </Router>
     </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import './assets/item.css';

// const App = () => {
//   return (
//     <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />}>
//             <Route path="/user" element={<Users />} />
//           </Route>
//         </Routes>
//     </Router>
//  );
// }

// export default App;

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }





// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//          <p><Link to="/">Home</Link></p>
//          <p><Link to="/about">About</Link></p>
//          <p><Link to="/users">Users</Link></p>
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }





