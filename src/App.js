import logo from './logo.svg';
import './App.css';

function App() {
 /* const obj = {
    name:"siirne",
    Age:23
  }
  const arr =[1,2,30];
  const firstName="sirine";
  const lastName="Sabbeh";
  /*const age=23;
  const inputplacholder="enter your details";
  const job="software enginner";
  const getFullName=(firstName,lastName)=>
     `${firstName} ${lastName}`;
  const detailInputox = <input placeholder={inputplacholder} autoComplete />*/

  const myObj=[{
    Title :'Blog Title 1',
    description :'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum'

  },
  {
    Title :'Blog Title 2',
    description :'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum'

  },
  {
    Title :'Blog Title 3',
    description :'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum'

  },
  {
    Title :'Blog Title 4',
    description :'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum'

  }];
  const blocgard = myObj.map((item,pos) =>{
    console.log(item);

    return (
      <div className="Blockgrid" key={item.id}>
       <h3>{item.Title}</h3>
       <p>{item.description}</p>

      </div>

    )
  })
  
  return (
    <div className="App">
    {/* <h3>fullName :{getFullName(firstName,lastName)}</h3>
     <p>age :{obj.Age}</p>
     <p>job :{job}</p>
     {detailInputox}
     <br/>
     {arr[0]}
     <br/>
     { arr[0]>0 ? "True" : "False"}
      */}
     {blocgard}
    
    </div>
  );
}

export default App;
