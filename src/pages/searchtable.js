"use client";
import Navbar from './components/navbar';
import Footer from './components/footer';
import SearchCars from './search';
import { useRouter } from "next/navigation";
import styles from './searchtable.module.css'

const SearchTable = () =>{

    const reports = [
        {
          Id: 1,
          Image: "/B1.png",
          Make: "Honda",
          Model: "Accord",
          Color: "Green",
          Location: "New York,"
        },
        {
          Id: 2,
          Image: "/temp.png",
          Make: "ABC-1234",
          Model: "New York, NY",
          Color: "2025-04-02",
          Location: "New York,"
        },
        {
            Id: 3,
            Image: "/B1.png",
            Make: "Honda",
            Model: "Accord",
            Color: "Green",
            Location: "New York,"
          },
          {
            Id: 4,
            Image: "/temp.png",
            Make: "ABC-1234",
            Model: "New York, NY",
            Color: "2025-04-02",
            Location: "New York,"
          },
          {
            Id: 4,
            Image: "/B1.png",
            Make: "Honda",
            Model: "Accord",
            Color: "Green",
            Location: "New York,"
          },
          {
            Id: 5,
            Image: "/temp.png",
            Make: "ABC-1234",
            Model: "New York, NY",
            Color: "2025-04-02",
            Location: "New York,"
          },
          {
            Id: 6,
            Image: "/B1.png",
            Make: "Honda",
            Model: "Accord",
            Color: "Green",
            Location: "New York,"
          },
          {
            Id: 7,
            Image: "/temp.png",
            Make: "ABC-1234",
            Model: "New York, NY",
            Color: "2025-04-02",
            Location: "New York,"
          },
          {
            Id: 8,
            Image: "/B1.png",
            Make: "Honda",
            Model: "Accord",
            Color: "Green",
            Location: "New York,"
          },
          {
            Id: 9,
            Image: "/temp.png",
            Make: "ABC-1234",
            Model: "New York, NY",
            Color: "2025-04-02",
            Location: "New York,"
          },
        

      ];

      const router = useRouter();
      const handleRowClick = (report) => {
        router.push("/searchmain"); 
      };
    

    return(
        <div><Navbar/>
        <div className = {styles.tableContainer}>
            
            <table className={styles.reportTable}>
                
            <thead>
          <tr>
            <th></th>
            <th></th>
            <th>carMakes</th>
            <th>Model</th>
            <th>Color</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
        {reports.map((report,index) => (
            <tr key={report.Id}
            onClick={() => handleRowClick(report)}
            className={styles.clickableRow}>
            <td>{index + 1}</td>
            <td>
                <img src = {report.Image} alt="car" className={styles.carImage} />
            </td>
             <td>{report.Make}</td>
              <td>{report.Model}</td>
              <td>{report.Color}</td>
              <td>{report.Location}</td>
            </tr>
          ))}
        </tbody>

            </table>
             </div>
        <Footer/>
        </div>
    );

}

export default SearchTable;
