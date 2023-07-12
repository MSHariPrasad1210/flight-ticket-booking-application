import React from "react";
import "./Book.css";
function Book() {
    return ( 
        <>
        <div className="head">
            <h1 className="title">
                Popular Destinations
            </h1>
        </div>
        <div className="imgd">
           <div className="goa">
                <h2>Goa</h2><br></br>
                <h3>3051 Properties</h3>
           </div>
           <div className="delhi">
                <h2>Delhi</h2><br></br>
                <h3>2436 Properties</h3>
           </div>
           <div className="mumbai">
                <h2>Mumbai</h2>
                <h3>1665 Properties</h3>
           </div>
           <div className="jai">
                <h2>Jaipur</h2>
                <h3>777 Properties</h3>
           </div>
           <div className="dubai">
                <h2>Dubai</h2>
                <h3>801 Properties</h3>
           </div>
        </div>
        </>
     );
}

export default Book;