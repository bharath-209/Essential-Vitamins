import Image from "next/image";

export default function IngredientsSection() {
  const cards = [
    {
      title: "Vitamin C",
      description: "Vitamin C as ascorbic acid",
      image: "/images/lactobacillus.png", // Replace with your path
      link: "#",
    },
    {
      title: "Vitamin B3",
      description: "Niacin for healthy gut and skin",
      image: "/images/lactobacillus.png", // Replace with your path
      link: "#",
    },
    {
      title: "Magnesium",
      description: "Boost energy and support muscle function",
      image: "/images/lactobacillus.png", // Replace with your path
      link: "#",
    },
    {
      title: "Hyaluronic Acid",
      description: "For smooth, supple and soft skin!",
      image: "/images/lactobacillus.png", // Replace with your path
      link: "#",
    },
    {
      title: "Lactobacillus",
      description: "Invigorate your gut microbiome",
      image: "/images/lactobacillus.png", // Replace with your path
      link: "#",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Better Ingredients
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Only the best when you choose products offered on our platform - high-quality
              ingredients for high-quality products!
            </p>
          </div>
          {/* <div className="md:col-span-2 flex items-center">   
            <div className="h-1 w-full bg-blue-200 rounded"></div>
          </div> */}
        </div>

        {/* Grid Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-lg p-6 relative overflow-hidden shadow-md"
            >
              {/* Background Image */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-50">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>

              {/* Link */}
              <a
                href={card.link}
                className="text-blue-500 font-medium relative z-10 mt-4 inline-block"
              >
                SEE MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
