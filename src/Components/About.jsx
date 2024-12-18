import React from "react";
import img from "../assets/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-[#EDDCC8]">
      {/* Heading */}
      <h1 className="font-semibold text-black text-4xl lg:mt-14 mt-24 mb-8 text-center">
        About Us
      </h1>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img 
            src={img}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-md"
          /> 
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-5">
          {/* Subheading */}
          <h2 className="font-semibold text-3xl text-black">
            What Makes Our Coffee Special?
          </h2>
          {/* Paragraphs */}
          <p className="text-black text-lg leading-relaxed">
            At Cafe Pulse, we use only the finest, freshly roasted beans to
            ensure rich flavor in every cup. Our skilled baristas craft each
            brew with precision and passion, tailoring it to your taste. We
            prioritize quality, sustainability, and a memorable coffee
            experience that keeps you coming back for more.
          </p>
          <p className="text-black text-lg leading-relaxed">
            Welcome to Cafe Pulse, where energy meets flavor in every cup! Our
            coffee is crafted from the finest beans, delivering bold, aromatic
            brews that awaken your senses. Whether you're here to work, relax,
            or recharge, our cozy space and vibrant ambiance make every visit
            special. At Cafe Pulse, every sip fuels your rhythm!
          </p>
          {/* Button */}
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
