import Navbar from './components/navbar'
import Footer from './components/footer'
import './index.css'


const HomePage = () => {
  
  return (
    <div>
      <Navbar />
      <div className = "aDcontainer" >
        <div className= "aDtextBox">
          <h1 className= "aDtitle" >Welcome to DumpedCars</h1>
          <p className= " aDsubtitle">Search, Report, and Track lost or abandoned vehicles easily.Search, Report, and Track lost or abandoned vehicles eSearch, Report, and Track lost or abandoned vehicles eSearch, Report, and Track lost or abandoned vehicles easily.asily.asily.</p>
          <button className = "aDbutton"> On AppStore</button>
        </div>
        <img className= "aDimage"  src="/B1.png" alt="Car Image"  />
      </div>

      <div className="howToContainer">
          <div className="howBox">
           <img className="howImage" src="/temp.png" />
           <h3 className = "howTitle"> How to Report </h3>
           <p className = "howDescription" > would like to invite you to take some time to explore a selection 
           of the projects I have worked on. These projects are a reflection of my skills, dedication, and passion 
           for continuous improvement. Your valuable feedback and insights would be incredibly beneficial to me as I strive to refine my expertise and grow within my field. It would mean a great deal if you could leave your thoughts or suggestions in the contact section,</p>
            </div>
          <div className="howBox">
          <img className="howImage" src="/temp.png" />
           <h3 className = "howTitle"> How to Search </h3>
           <p className = "howDescription" > would like to invite you to take some time to explore a selection 
           of the projects I have worked on. These projects are a reflection of my skills, dedication, and passion 
           for continuous improvement. Your valuable feedback and insights would be incredibly beneficial to me as I strive to refine my expertise and grow within my field. It would mean a great deal if you could leave your thoughts or suggestions in the contact section,</p>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default HomePage;