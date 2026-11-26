import Nav from "./component/Nav"
import Footer from "./component/Footer"
import Home from "./component/Home"
import Props from "./component/Props"

function App(){
  return (<div>
    {/* <Nav data="Hello" name="kartik" age="22"> </Nav>
    <Home></Home>
    <Footer></Footer>
    
    */}
    {/* <Props num={12}></Props> */}
    <Props arr={[10,15,20]}></Props>
</div>
)
}
export default App