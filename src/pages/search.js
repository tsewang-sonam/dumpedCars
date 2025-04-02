import Navbar from "./components/navbar";
import Footer from "./components/footer";
import styles from './search.module.css'
import { useState } from "react";
import Select from "react-select"
import { useRouter } from "next/router";
import { Router } from "next/router";


const SearchCars = () =>{
    const carMakes = [
        { value: 'acura', label: 'Acura'},
        { value: 'alfa-romeo', label: 'Alfa Romeo'},
        { value: 'audi', label: 'Audi' },
        { value: 'bmw', label: 'BMW' },
        { value: 'buick', label: 'Buick' },
        { value: 'cadillac', label: 'Cadillac' },
        { value: 'chevrolet', label: 'Chevrolet' },
        { value: 'ford', label: 'Ford' },
        { value: 'honda', label: 'Honda' },
        { value: 'hyundai', label: 'Hyundai' },
        { value: 'kia', label: 'Kia' },
        { value: 'lexus', label: 'Lexus' },
        { value: 'mazda', label: 'Mazda' },
        { value: 'mercedes', label: 'Mercedes-Benz' },
        { value: 'nissan', label: 'Nissan' },
        { value: 'toyota', label: 'Toyota' },
        { value: 'volkswagen', label: 'Volkswagen' },
        { value: 'audi', label: 'Audi' },
        { value: 'subaru', label: 'Subaru' },
        { value: 'ram', label: 'Ram' },
        { value: 'jaguar', label: 'Jaguar' },
        { value: 'porsche', label: 'Porsche' },
        { value: 'tesla', label: 'Tesla' },
        { value: 'bmw', label: 'BMW' },
        { value: 'chrysler', label: 'Chrysler' },
        { value: 'buick', label: 'Buick' },
        { value: 'cadillac', label: 'Cadillac' },
        { value: 'mitsubishi', label: 'Mitsubishi' },
        { value: 'acura', label: 'Acura' },
        { value: 'infiniti', label: 'Infiniti' },
        { value: 'volvo', label: 'Volvo' },
        { value: 'mini', label: 'Mini' },
        { value: 'land-rover', label: 'Land Rover' },
        { value: 'ferrari', label: 'Ferrari' },
        { value: 'lamborghini', label: 'Lamborghini' },
        { value: 'maserati', label: 'Maserati' },
        { value: 'rolls-royce', label: 'Rolls-Royce' },
        { value: 'aston-martin', label: 'Aston Martin' },
        { value: 'bugatti', label: 'Bugatti' },
        { value: 'mclaren', label: 'McLaren' },
        { value: 'bentley', label: 'Bentley' },
        { value: 'alfa-romeo', label: 'Alfa Romeo' }
      ];
      
    
      const carModels = {
        acura: [
          { value: 'ILX', label: 'ILX' },
          { value: 'MDX', label: 'MDX' },
          { value: 'NSX', label: 'NSX' },
          { value: 'RDX', label: 'RDX' },
          { value: 'TLX', label: 'TLX' }

        ],
        dog: [
          { value: 'meat', label: 'Meat' },
          { value: 'bones', label: 'Bones' },
        ],
      };
    
      const carColors = [
        { value: 'white', label: 'White' },
        { value: 'blue', label: 'Blue' },
        { value: 'black', label: 'Black' },
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
        { value: 'silver', label: 'Silver' }
      ];
    
      // Step 2: Set up state for selected values
      const [selectedCategory, setSelectedCategory] = useState(null);
      const [selectedSubCategory, setSelectedSubCategory] = useState(null);
      const [selectedColor, setSelectedItem] = useState(null);
    
      // Step 3: Handle selection changes
      const handleCategoryChange = (selectedOption) => {
        setSelectedCategory(selectedOption);
        setSelectedSubCategory(null); // Reset subcategory
        setSelectedItem(null); // Reset item
      };
    
      const handleSubCategoryChange = (selectedOption) => {
        setSelectedSubCategory(selectedOption);
        setSelectedItem(null); // Reset item
      };
    
      const handleItemChange = (selectedOption) => {
        setSelectedItem(selectedOption);
      };

      const router = useRouter()

      const handleSearchClick = () => {
      router.push("/searchtable")
      };

   

    return (
        <div>
            <Navbar/>
            <div className={`${styles.searchContainer} ${styles.search}`}>
          
          <div className={styles.searchBox}>
           <h3 className = {styles.searchTitle}> Search Below </h3>
           <p className = {styles.howDescription} > would l uable feedback </p>
           <div className= {styles.menuBar}>
           <Select  className = {styles.bars} options={carMakes} onChange={handleCategoryChange} value={selectedCategory} placeholder="Car Make"/>

           {selectedCategory && (
           <Select className = {styles.bars} options={carModels[selectedCategory.value]} onChange={handleSubCategoryChange} value={selectedSubCategory} placeholder="Car Model"/>
           )}
           
           <Select className = {styles.bars} options={carColors} onChange={handleItemChange} value={selectedColor} placeholder="Car Color"/>
           </div>
           <button className= {styles.searchBtn} onClick={handleSearchClick} >Search</button>
             
            </div>
          <div className={styles.searchBox2}>
          <img className={styles.howImage} src="/temp.png" />
           <h3 className = {styles.howTitle}> How to Search </h3>
        </div>
        </div>

            <Footer/>
        </div>
    );



}

export default SearchCars;