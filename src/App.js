import AboutUs from "./Components/AboutUs";
import NavBar from "./Components/NavBar";
import TextBar from "./Components/TextBar";


function App() {
  return (
    <>
    <NavBar title='Pehela App'/>
    <div className="container" >
      <h1>Enter text here</h1>
      <TextBar/>
    </div>
    {/* <AboutUs/> */}
    </>
  );
}

export default App;