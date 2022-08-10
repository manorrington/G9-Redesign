import React from "react";
import Navbar from "../components/Navbar";
import './sports.css';

const SportsPage = () => {
    return ( 

    <div>
        <Navbar />
    <section class="section">  
      <div class = "box-main">
        <div class="firstHalf">
            <h1 class="text-big">
             Brian Windhorst's update on Kevin Durant's trade demands & the Brooklyn Nets' future | Get Up
            </h1>
        <video loop autoPlay>
        <source
          url=""
        //   type="video/mp4"
        />
        Your browser does not support the video tag.
        </video>
        </div>
       </div>
    </section> 
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                        Clippers are CLEARLY the best in the West with a healthy Kawhi Leonard and Paul George?! 
                        </h1>
                    </div>
                </div>
            </section>
              <section className="section">
                <div className="box-main">
                  <div></div>  
                </div>

              </section>
    </div>      
        
    
    )
}

export default SportsPage;