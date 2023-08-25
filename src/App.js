import Cars from "./components/Cars";
import Student from "./components/Student";
import Input from "./components/Input";
import Button from "./components/Button";
function App() {
  return (
   <div>
    <h1>Hello World</h1>
    <Student name={"hari"} id={123} dep={"EEE"}/>
    <Cars brand={"hyundai"}/>
    <Cars brand={"swift"}/>
    <Cars brand={"maruthi"}/>
    <Cars brand={"bmw"}/>
    <Cars brand={"hyundai"}/>
    <Input />
    <Button name='Alert' message='hello'/>
   </div>
   
  );
}

export default App;
