
import List from "./List.jsx";

function App()
{

  const fruits = [
        {id:1 , name:"apple", calor: 90}, 
        {id:2 , name:"orange", calor: 90}, 
        {id:3 , name:"orange2", calor: 90} , 
        {id:4 , name:"orange3", calor: 90} 

  ];

  return(
    <>
      <List items={fruits} category="Friuts"/>
      <List items={fruits} category="Vegetables"/>
    </>
  );
}

export default App