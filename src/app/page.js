"use client"
import Home_Page from '../../pages/home';
import Events from '../../pages/events';
import People from '../../pages/people';
import Contact from '../../pages/contact';
import React, { useState } from 'react';
import styles from '@/app/page.module.css';
import Footer from './components/footer';
export default function Home() {
  const [active, setActive] = useState("Home_Page");

  return (
    <>
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet" />

        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div class="container">
            <div className={styles.navLogo}>
              <img
                src="CSC_Logo_Dark_name (1).svg"
                alt="Logo"
                width="70"
                height="70"
                className={`d-inline-block align-text-top ${styles.glogo}`}
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${styles.navCollapse}`} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="nav-link active fs-4 mx-4" aria-current="page" onClick={() => setActive("Home_Page")}>
                      Home
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active fs-4 mx-4" onClick={() => setActive("People_Page")}>
                      People
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active fs-4 mx-4" onClick={() => setActive("Events_Page")}>
                      Events
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active fs-4 mx-4" onClick={() => setActive("Contact_Page")}>
                      Contact
                  </button>
                </li>
              </ul>
              <button type="button" className={`btn btn-success ${styles.customButton}`}>
                  Sign In
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div>
        {active === "Home_Page" && <Home_Page />}
        {active === "Events_Page" && <Events />}
        {active === "People_Page" && <People />}
        {active === "Contact_Page" && <Contact />}
      </div>
      <Footer />
    </>
  );
}
