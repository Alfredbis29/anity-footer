import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Anity</h4>
            <h1 className="list-unstyled">
          
              <li>Congo , Bukavu</li>
              <li>243 Streeet South-Kivu</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>apply jobs</li>
              <li>Marketing</li>
              <li>apply for school abroard</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact us</h4>
            <ui className="list-unstyled">
              <li>Tresor</li>
              <li>aubin</li>
              <li>cedrick</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm text-center">
            &copy;{new Date().getFullYear()} Anity | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
