import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-blue-50 py-12 relative overflow-hidden">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-snug">
          <span className="text-blue-500">Essential Vitamins</span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section: Title and Description */}
        <div className="flex-1 text-center">
          <h4 className="text-gray-600 text-lg">Online Medical Supplies</h4>
          {/* Increased font size */}
          <h2 className="text-gray-800 text-4xl md:text-3xl font-bold mb-4">
            Get Your Vitamins & Minerals
          </h2>
          {/* Added button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-2 px-6 rounded-lg shadow-md transition duration-300">
            Explore
          </button>
        </div>

        {/* Center Image */}
        <div className="relative flex-shrink-0">
          <div className="relative z-10">
            <Image
              src="/images/hero.png" // Replace with your image path
              alt="Probiotics Bottle"
              width={250}
              height={250}
              className="drop-shadow-lg"
            />
          </div>
          {/* Background Highlight */}
          <div className="absolute bg-yellow-200 rounded-full w-60 h-60 -z-10 transform -translate-y-4 -translate-x-4"></div>
        </div>

        {/* Right Section: Features */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Vitamins */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <Image
                src="/images/demo1.png" // Replace with actual icon
                alt="Vitamins Icon"
                width={24}
                height={24}
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-800">Vitamins</h3>
              <p className="text-gray-600 text-sm">
                Increased vitamins and minerals in your diet.
              </p>
            </div>
          </div>

          {/* Weight Loss */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <Image
                src="/images/demo1.png" // Replace with actual icon
                alt="Weight Loss Icon"
                width={24}
                height={24}
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-800">Weight Loss</h3>
              <p className="text-gray-600 text-sm">
                Find scientifically proven solutions.
              </p>
            </div>
          </div>

          {/* Functional Foods */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <Image
                src="/images/demo1.png" // Replace with actual icon
                alt="Functional Foods Icon"
                width={24}
                height={24}
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-800">
                Functional Foods
              </h3>
              <p className="text-gray-600 text-sm">
                From protein powders to baby formula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
