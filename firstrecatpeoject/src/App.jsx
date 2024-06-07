import "./App.css";
import Title from "./Title.jsx"
import Image from "./Image.jsx"

function Description(){
  return(
    <h2>this is a Description of page</h2>
  )
}
  function App(){
    return(
      <div>
        <Title/>
        <Description/>
        <Title/>
        <Description/>
        <Image/>
      </div>
    )
  }
export default App;
