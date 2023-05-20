import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Banner = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="flex flex-wrap items-center justify-center py-12 bg-blue-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:flex-row-reverse items-center">
          <div className="md:w-1/2">
            <img
              className="rounded-lg shadow-lg"
              src="https://images-cdn.ubuy.co.in/633aad0dcb0629168c563ca3-toy-cars-sian-fkp3-metal-model-car-with.jpg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 me-20">
            <h2 className="text-4xl font-semibold mb-4">The Biggest Marketplace for
              <span
                className="font-bold text-primary"
              > Toy Car</span></h2>
            <p className="text-lg text-gray-700 my-6">
              It is a latest <span className='font-bold'>racing car</span>. High quality and 4 Engine 356 CC. Metal glassy clean body. You can choose this one. Remote control system.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;