import React from "react";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

function Home () {
    return(
            <>
              <div className="home">
                  <NavBar />
                  <hr className='divider' ></hr>
                  <HeroSection />
              </div>      

            </>
    )
}
export default Home;