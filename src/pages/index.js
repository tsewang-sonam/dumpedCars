import Navbar from './components/navbar'
import Footer from './components/footer'
import styles from './index.module.css';


const HomePage = () => {
  
  return (
    <div >
      <Navbar />
      <div className={`${styles.aDcontainer} ${styles.index}`}>
      {/* <div className = "aDcontainer"  className ={styles.index}> */}
        <div className= {styles.aDtextBox}>
          <h1 className= {styles.aDtitle} >Welcome to DumpedCars</h1>
          <p className= {styles.aDsubtitle}>Search, Report, and Track lost or abandoned vehicles easily.Search, Report, and Track lost or abandoned vehicles eSearch, Report, and Track lost or abandoned vehicles eSearch, Report, and Track lost or abandoned vehicles easily.asily.asily.</p>
          <button className = {styles.aDbutton}> On AppStore</button>
        </div>
        <img className= {styles.aDimage}  src="/B1.png" alt="Car Image"  />
      </div>

      <div className={styles.howToContainer}>
          <div className={styles.howBox}>
           <img className={styles.howImage} src="/temp.png" />
           <h3 className = {styles.howTitle}> How to Report </h3>
           <p className = {styles.howDescription}> would like to invite you to take some time to explore a selection 
           of the projects I have worked on. These projects are a reflection of my skills, dedication, and passion 
           for continuous improvement. Your valuable feedback and insights would be incredibly beneficial to me as I strive to refine my expertise and grow within my field. It would mean a great deal if you could leave your thoughts or suggestions in the contact section,</p>
            </div>
          <div className={styles.howBox}>
          <img className={styles.howImage} src="/temp.png" />
           <h3 className = {styles.howTitle}> How to Search </h3>
           <p className = {styles.howDescription} > would like to invite you to take some time to explore a selection 
           of the projects I have worked on. These projects are a reflection of my skills, dedication, and passion 
           for continuous improvement. Your valuable feedback and insights would be incredibly beneficial to me as I strive to refine my expertise and grow within my field. It would mean a great deal if you could leave your thoughts or suggestions in the contact section,</p>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default HomePage;