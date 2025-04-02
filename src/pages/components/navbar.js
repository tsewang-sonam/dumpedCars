import { useState } from "react";
import styles from './navbar.module.css';


const Navbar = () => {
  const [isSidebarVisible, setSideVisible] = useState(false);

  const toggleSidebar = () => {
    setSideVisible((prev) => !prev); // Toggle sidebar visibility
  };

  return (
    <nav className={styles.navbar}>
      {/* Sidebar */}
      <ul className={`${styles.Sidebtnlist} ${isSidebarVisible ? styles.show : styles.hide}`}>
        <li className={styles.Sidelist} onClick={toggleSidebar}>
          <a href="#" className={styles['Side-a-link']}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </a>
        </li>
        <li className={styles.Sidelist}><a href="/" className={styles['Side-a-link']}>Home</a></li>
        <li className={styles.Sidelist}><a href="/signup" className={styles['Side-a-link']}>About</a></li>
        <li className={styles.Sidelist}><a href="/search" className={styles['Side-a-link']}>Search</a></li>
        <li className={styles.Sidelist}><a href="/report" className={styles['Side-a-link']}>Report</a></li>
        <li className={styles.Sidelist}><a href="/signin" className={styles['Side-a-link']}>Sign In</a></li>
      </ul>

      {/* Main Navigation (Desktop View) */}
      <ul className={styles.btnList}>
        <li className={styles.list}><a href="/" className={styles['a-link']}>Home</a></li>
        <li className={`${styles.list} ${styles.hideOnMobile}`}><a href="/signup" className={styles['a-link']}>About</a></li>
        <li className={styles.Sidelist}><a href="/search" className={styles['Side-a-link']}>Search</a></li>
        <li className={`${styles.list} ${styles.hideOnMobile}`}><a href="/report" className={styles['a-link']}>Report</a></li>
        <li className={`${styles.list} ${styles.hideOnMobile}`}><a href="/signin" className={styles['a-link']}>Sign In</a></li>
        <li className={`${styles.list} ${styles.menu}`} onClick={toggleSidebar}>
          <a href="#" className={styles['a-link']}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
              <path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
