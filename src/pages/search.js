import Navbar from "./components/navbar";
import Footer from "./components/footer";
import  './search.css'

const SearchCars = () =>{

    return (
        <div>
            <Navbar/>
            <div className="searchContainer">
          <div className="searchBox">
           <h3 className = "searchTitle"> How to Report </h3>
           <p className = "howDescription" > would l uable feedback and insights would be incredibly 
           beneficial to me as I strive to refine my expertise and grow within my field. It would mean
            a great deal if you could leave your thoughts or suggestions in the contact section,</p>
            </div>
          <div className="searchBox">
          <img className="howImage" src="/temp.png" />
           <h3 className = "howTitle"> How to Search </h3>
        </div>
        </div>

            <Footer/>
        </div>
    );



}

export default SearchCars;