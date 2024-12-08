//import logo from './logo.svg';
import './App.css';
import { useState } from "react";
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
/*export default  function App () {
  return (
    <div className="App">
      <h1>Hello CodeSandBox</h1>
      <h2>Start editing to seee some magic happen</h2>
    </div>
  )
};
*/

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] =useState(0);
   async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    //console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1); 
  }
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count}/>
     
    </div>
  );
}

function Message(props) {
  return (
    <p>You have read <strong>{props.count}</strong> pieces of advice </p>
  );
}
/* moved from below  button and  made  changes  as  props.count 
<p>You have read <strong>{count}</strong> pieces of advice </p>
then  replaced  <Message count={count}/>     */