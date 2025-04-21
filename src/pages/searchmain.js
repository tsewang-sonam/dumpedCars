import Navbar from "./components/navbar";
import Footer from "./components/footer";
import styles from './searchmain.module.css'
import dynamic from 'next/dynamic';
import DynamicSwiper from './components/swiper';


const MapView = dynamic(() => import('./components/MapView'), {
    ssr: false,
  });

const SearchMain = () => {
    return(
        <div>
            <Navbar/>
            
     <div className= {styles.mainContianer}>

            <div className= {styles.smContianer}>

            <DynamicSwiper />
                 
                </div>

            <div className= {styles.Contianer}>
                <div className= {styles.descContianer}>
                <h3>Find Your Car</h3>
                <h5>acura</h5>
                <h5>rdx</h5>
                <h5>white</h5>
                </div>

                <div className= {styles.mapContianer}>
                    <MapView lat={37.8044} lng={-122.2712} />
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default SearchMain;
