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

  const myObj={
    Title :'Blog Title 1',
    description :'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum'

  }
  const styles={
    margin :"16px",
    padding :"16px" ,
    boxShadow: '0 2px 5px #ccc',
    boxSizing:"border-box" ,
    borderRadius:"5px"
  }
  

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
      <div style={styles}>
        <h3>{myObj.Title}</h3>
        <p>{myObj.description}</p>
      </div>
      <hr></hr>
      <div style={styles}>
        <h3>{myObj.Title}</h3>
        <p>{myObj.description}</p>
      </div>
      <hr></hr>
      <div style={styles}>
        <h3>{myObj.Title}</h3>
        <p>{myObj.description}</p>
      </div>
      <hr></hr>
      <div style={styles}>
        <h3>{myObj.Title}</h3>
        <p>{myObj.description}</p>
      </div>
    </div>
  );
}

export default App;
