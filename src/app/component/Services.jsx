

const serviceData = [
  {
    id: 1,
    title: "Custom Software Development",
    icon: "💻",
    description:
      "Building scalable and robust software solutions tailored to your business needs.",
  },
  {
    id: 2,
    title: "Web Development",
    icon: "🌐",
    description:
      "Creating responsive and dynamic websites that deliver seamless user experiences.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    icon: "📱",
    description:
      "Developing cross-platform mobile applications that provide high performance and usability.",
  },
  
  {
    id: 5,
    title: "UI/UX Design",
    icon: "🎨",
    description:
      "Crafting intuitive and aesthetically pleasing interfaces that enhance user engagement.",
  },
  {
    id: 6,
    title: "API Integration",
    icon: "🔗",
    description:
      "Seamlessly integrating third-party APIs to extend the functionality of your existing platforms.",
  },
 
  {
    id: 7,
    title: "E-commerce Development",
    icon: "🛒",
    description:
      "Building scalable and secure e-commerce platforms with seamless payment integration.",
  },
 
  {
    id: 8,
    title: "IT Consulting",
    icon: "🧠",
    description:
      "Providing expert IT consulting to help businesses optimize technology and drive innovation.",
  },
];

const Services = () => {
  return (
    <section className="pt-10 sm:py-6 px-4 sm:px-4 md:px-8 bg-slate-50" id="services">
      <div className="container mx-auto text-center px-4 w-full py-2">
        <h2 className="text-3xl sm:mb-4 font-bold mb-4 font-nunito text-blue-500 pb-5 sm:text-2xl">
          Our Services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-1 sm:w-full md:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <div className=" rounded-lg cursor-pointer border transition duration-300 ease-in-out transform bg-slate-100 hover:bg-slate-150 hover:scale-105 p-4 sm:w-full" key={service.id}>
				<div className="flex flex-row gap-2 justify-center items-center">

              <div className="flex justify-center mb-2 text-2xl text-blue-500 sm:text-xl rounded-full bg-slate-200 p-2">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-nunito sm:text-lg">
                {service.title}
              </h3>
				</div>
              <p className="text-gray-600 text-base font-montserrat sm:text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
