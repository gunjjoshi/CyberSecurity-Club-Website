import styles from '../src/app/page.module.css';
import Head from 'next/head';
import Script from 'next/script';
import MediaComponent from '@/app/components/MediaComponent';
import Link from 'next/link';

import React from 'react'

const Events = () => {
    return (
        <div><Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />

            <link href="https://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet"></link>
            <style dangerouslySetInnerHTML={{
                __html: `
        body {
          font-family: 'Cascadia Code', sans-serif;
        }
      `}} />
            <div className={styles.bg}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand my-0" href="#">
                            <img src="CSC_Logo_Dark_name (1).svg" alt="Logo" width="70" height="70" className={`d-inline-block align-text-top ${styles.glogo}`} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active fs-4 mx-4" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active fs-4 mx-4" href="/people">People</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active fs-4 mx-4" href="/events">Events</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active fs-4 mx-4" href="/contact">Contact</a>
                                </li>
                            </ul>

                            <button type="button" className={`btn btn-success ${styles.customButton}`}>Sign In</button>
                        </div>
                    </div>
                </nav>
                <div className={styles.heading} style={{ marginTop: '10px', color: 'rgb(252, 3, 3)' }}>

                    <div className={`${styles.radioGroup} d-flex flex-wrap justify-content-center`}>
                        <div className={`${styles.radioItem}`}>
                            <input type="radio" className={`${styles.radioButton}`} name="btnradio" id="btnradio1" autoComplete="off" checked />
                            <label className={`${styles.radioLabel}`} htmlFor="btnradio1">Upcoming</label>
                        </div>
                        <div className={`${styles.radioItem}`}>
                            <input type="radio" className={`${styles.radioButton}`} name="btnradio" id="btnradio3" autoComplete="off" />
                            <label className={`${styles.radioLabel}`} htmlFor="btnradio3">Previous</label>
                        </div>
                    </div>

                </div>

                <br /><br />
                <MediaComponent />
                <br /><br />
                <MediaComponent />
                <br /><br />
                <MediaComponent />
                <br /><br />
                <MediaComponent />



                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous" />
            </div></div>
    )
}

export default Events;

