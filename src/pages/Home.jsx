import React from "react";
import Intro from "../components/Intro";
import Popularitems from "../components/Popularitems";
import Heading from "../components/Heading";
import Cloths from "../components/Cloths";
import Footwear from "../components/Footwear";
import Electronics from "../components/Electronics";
import Beauty from "../components/Beauty";

function Home() {
  return (


    <div>
      <div className="bg-primary">
        <Intro />
      </div>
      <div className="w-[95%] md:max-w-[80%] m-auto">
        <Heading text="TOP SELLING" />
        <Popularitems />
        <Heading text="Beauty" />
        <Beauty />
        <Heading text="CLOTHS/DRESSES" />
        <Cloths />
        <Heading text="ELECTRONICS" />
        <Electronics />

        <Heading text="FOOTWEAR" />
        <Footwear />
      </div>
    </div>
  );
}

export default Home;
