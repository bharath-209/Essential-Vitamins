import Image from 'next/image';

export default function News() {
  return (
    <section className="container mx-auto px-6 py-12 bg-white">
      <h3 className="text-center text-blue-500 text-4xl font-bold mb-8 " >Latest News</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {/* News Item 1 */}
        <div className="w-full md:w-[300px] p-4 border rounded-lg shadow-md flex-shrink-0">
          <Image
            src="/images/demo1.png"
            alt="News 1"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-gray-500">The Covid-19 Epidemic in 2022 Is Back</p>
        </div>

        {/* News Item 2 */}
        <div className="w-full md:w-[300px] p-4 border rounded-lg shadow-md flex-shrink-0">
          <Image
            src="/images/demo1.png"
            alt="News 2"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-gray-500">New Research on Health Supplements</p>
        </div>

        {/* News Item 3 */}
        <div className="w-full md:w-[300px] p-4 border rounded-lg shadow-md flex-shrink-0">
          <Image
            src="/images/demo1.png"
            alt="News 3"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-gray-500">Turmeric & Ginger Benefits</p>
        </div>

        {/* News Item 4 */}
        <div className="w-full md:w-[300px] p-4 border rounded-lg shadow-md flex-shrink-0">
          <Image
            src="/images/demo1.png"
            alt="News 4"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-gray-500">Health Tips for Boosting Immunity</p>
        </div>

        {/* News Item 5 */}
        <div className="w-full md:w-[300px] p-4 border rounded-lg shadow-md flex-shrink-0">
          <Image
            src="/images/demo1.png"
            alt="News 5"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-gray-500">Daily Vitamins You Should Take</p>
        </div>

        {/* News Item 6 */}
        <div className="w-full md:w-[300px] p-4 border rounded-lg shadow-md flex-shrink-0">
          <Image
            src="/images/demo1.png"
            alt="News 6"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-gray-500">Why Hydration is Important</p>
        </div>

        {/* News Item 7 */}
        <div className="w-full md:w-[300px] p-4 border rounded-lg shadow-md flex-shrink-0">
          <Image
            src="/images/demo1.png"
            alt="News 7"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-gray-500">Exercise and Mental Health</p>
        </div>

        {/* News Item 8 */}
        <div className="w-full md:w-[300px] p-4 border rounded-lg shadow-md flex-shrink-0">
          <Image
            src="/images/demo1.png"
            alt="News 8"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 text-gray-500">Natural Remedies for Stress</p>
        </div>
      </div>
    </section>
  );
}
