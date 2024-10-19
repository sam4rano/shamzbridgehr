import Image from "next/image";
import director from "../../../public/images/board.jpg";

const AboutMission = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative w-full before:content-[''] before:absolute before:inset-0 before:bg-gray-500 before:opacity-60">
        <Image
          src={director}
          alt="Director of the company"
          className="w-full h-[400px] object-cover "
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center align-middle justify-center p-4 sm:p-2  rounded-lg font-karla">
          <div className="flex flex-col items-center justify-center align-middle">
            <h3 className="text-5xl sm:text-3xl font-bold text-white sm:text-center ">
              Join us on our journey
            </h3>
            <p className="text-2xl font-bold sm:text-base text-white mt-2 sm:text-center">
              We’re here to create lasting impact—are you ready to be a part of
              it?
            </p>
            <a
              href="tel:+2348135153620"
              className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className=" bg-white py-12 sm:py-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 px-4 lg:px-0">
          <article className="text-center max-w-2xl py-4">
            <h2 className="text-4xl font-bold text-blue-600 sm:text-2xl sm:pb-2" >
              Our Vision and Mission
            </h2>
            <p className="text-xl sm:text-lg mt-4 text-gray-700 sm:mt-0">
              Redefining industry standards through consultation, our innovative
              approach integrates cutting-edge technology with expert insights,
              driving transformative change and setting new benchmarks for
              excellence.
            </p>
          </article>

          <div className="flex flex-col md:flex-row gap-12 sm:gap-6 w-full max-w-5xl">
            {/* Mission */}
            <article className="flex flex-row sm:flex-col justify-center align-middle items-center bg-blue-50 p-8 sm:p-4 rounded-lg shadow-md">
              <h3 className="text-3xl w-2/3 font-bold text-blue-600 sm:text-center sm:text-xl">Our Mission</h3>
              <p className="mt-4 text-xl sm:text-lg  text-gray-700 sm:text-center">
                Our mission is to cultivate an empowering atmosphere for skill
                acquisition and capacity enhancement that fosters holistic
                growth for individuals and organizations.
              </p>
            </article>

            {/* Vision */}
            <article className="flex flex-row sm:flex-col justify-center align-middle items-center bg-blue-50 p-8 sm:p-4 rounded-lg shadow-md">
              <h3 className="text-3xl w-2/3 font-bold text-blue-600 sm:text-center sm:text-xl">Our Vision</h3>
              <p className="mt-4 text-xl sm:text-lg  text-gray-700 sm:text-center">
                To become a premier organization dedicated to enhancing personal
                and professional capacities, fostering efficiency, productivity,
                and innovation.
              </p>
            </article>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default AboutMission;
