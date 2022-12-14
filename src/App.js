import "./App.css";
import ArtPiece from "./components/ArtPiece";
import bd from "./assets/bakery-data.json";

/* makes the image URLs work */
bd.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  console.log(bd);

  return (
    <div className="App">
      <h1>SleepKoala727's Portfolio</h1>
      <h2>Hi, I'm SleepyKoala727!</h2>
      <h3>I'm a senior at Brown University studying User Interfaces and User Experiences — welcome to 
        my portfolio. </h3>
      <h3>In all of my works shown below, I focus on <u>users that often lack access to 
      necessary technological resources needed to succeed</u> in a world that increasing
      requires you to be more digitally savvy.</h3>
      <h3>My goal in my pieces is not only to provide the missing pieces for these individuals but also
        to start the conversation about why it is these people aren't given what they need to thrive.</h3>

      <hr></hr>

      <div className="content">
        {bd.map((item, index) => {
          return (
            <div>
              <ArtPiece key={index} name={item.name} desc={item.description} image={item.image} link={item.link} 
              users={item.users} context={item.context}/>
              <hr className="pageHR"></hr>
            </div>
          )
        })}
      </div>
      
    </div>
  );
}

export default App;