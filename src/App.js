import InlineStyling from "./InlineStyling";
import StyleObjectVariable from "./StyleObjectVariable";
import SharingStyleAcrossComponents from "./SharingStyleAcrossComponents";

function App(){
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <InlineStyling/>
      <StyleObjectVariable/> 
      <SharingStyleAcrossComponents/>
    </div>
  )
} 

export default App;