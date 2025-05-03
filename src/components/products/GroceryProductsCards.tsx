import React from "react";

type BlogCard = {
  title: string;
  img: string;
  comments: number;
  time: string;
};

const blogData: BlogCard[] = [
  {
    title: "Simplest Salad Recipe ever",
    img:
      "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    comments: 39,
    time: "6 mins ago",
  },
  {
    title: "Best FastFood Ideas (Yummy)",
    img:
      "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    comments: 0,
    time: "10 days ago",
  },
  {
    title: "Why to eat salad?",
    img:
      "https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    comments: 12,
    time: "4 hours ago",
  },
];

const BlogCards: React.FC = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-5 sm:p-10 md:p-16">
      {/* Header */}
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          <svg
            className="h-6 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10..." />
          </svg>
          <span className="font-semibold">Cooking Blog</span>
        </div>
        <a href="#" className="text-indigo-600 hover:underline">
          See All
        </a>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogData.map((card, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative">
              <a href="#">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 hover:bg-opacity-10 transition" />
              </a>
              <a href="#!">
                <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded hover:bg-white hover:text-indigo-600 transition">
                  Cooking
                </div>
              </a>
            </div>

            {/* Content */}
            <div className="px-6 py-4 flex-grow">
              <a
                href="#"
                className="text-lg font-semibold text-gray-800 hover:text-indigo-600 block mb-2"
              >
                {card.title}
              </a>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vel venenatis elit.
              </p>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 flex justify-between items-center bg-gray-100 text-sm text-gray-700">
              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 8v4l3 3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{card.time}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2m-2 0H9m-2 0H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m2-4h4m-4 0H9m4 0h1m-6 0h.01"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{card.comments} Comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; c

export default BlogCards;
