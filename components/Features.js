import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="bg-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Container for Cards */}
        <div className="bg-[#0b3849] text-white rounded-lg py-8 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
              <Image
                src="/icons/clinically.png" // Replace with your icon
                alt="Clinically Studied"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Clinically Studied</h3>
            <p className="text-sm">
              All products that we offer have undergone lab and safety tests.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
              <Image
                src="/icons/veg.png" // Replace with your icon
                alt="Vegetarian Friendly"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Vegetarian Friendly</h3>
            <p className="text-sm">
              We have a wide selection of vegetarian products to meet your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
              <Image
                src="/icons/india.png" // Replace with your icon
                alt="Made in India"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Made In India</h3>
            <p className="text-sm">
              Shop local and explore health products made right here in India.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
              <Image
                src="/icons/shoppy.png" // Replace with your icon
                alt="Free Shipping"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
            <p className="text-sm">
              We deliver to your door with no shipping costs on your orders.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
              <Image
                src="/icons/no-risk.png" // Replace with your icon
                alt="No Risk"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">No Risk</h3>
            <p className="text-sm">
              We ensure that all products are safe and within their use-by date.
            </p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
              <Image
                src="/icons/gmo.png" // Replace with your icon
                alt="GMO Free"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">GMO Free</h3>
            <p className="text-sm">
              Natural, no modified products and derivatives for those who need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
