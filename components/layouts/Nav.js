import React from 'react'
import Link from 'next/link';

export default function Nav(){
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-white fixed-top">
            <div className="page-container">
              <a className="navbar-brand d-flex align-items-center" href="/">
                  <div className="logo">mildronize </div>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                      <li className="nav-item d-flex justify-content-center">
                      <Link  href="/">
                          <a className="nav-link">home <span className="sr-only">(current)</span></a>
                      </Link>
                      </li>
                      <li className="nav-item d-flex justify-content-center">
                          <Link href="/page/about"><a className="nav-link">about</a></Link>
                      </li>
                  </ul>
              </div>
            </div>
            </nav>
            <div className="header-offset-bottom"></div>

        </div>
    
    )
}