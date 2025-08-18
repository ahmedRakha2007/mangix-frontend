"use client";
import Slider from "react-slick";
import Image from "next/image";

const reviewers = [
  {
    name: "Ahmed Saad",
    username: "@aya_manga",
    review: "Absolutely love the manga collection! Fast shipping too.",
    image: "/head-shot-portrait-close-smiling-600nw-1714666150.webp",
  },
  {
    name: "Omar Farouk",
    username: "@omar_draws",
    review: "Comics arrived in top shape. Highly recommend!",
    image: "/istockphoto-1682296067-612x612.jpg",
  },
  {
    name: "Ali Mahmoud",
    username: "@lina_reads",
    review: "Amazing service and collection. I’m hooked!",
    image: "/smiling-african-american-millennial-businessman-600nw-1437938108.webp",
  },
  {
    name: "Ahmed Saad",
    username: "@ahmed_comix",
    review: "Great variety, and I found rare issues too!",
    image: "/head-shot-portrait-close-smiling-600nw-1714666150.webp",
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280, // xl
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 1024, // lg
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768, // md
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Reviewers = () => {
  return (
    <section className="px-5 lg:px-20 py-10 cursor-pointer">
      <h2 className="text-3xl xl:text-4xl font-semibold text-quaternary mb-10 text-center">
        Our Happy Customers
      </h2>
      <Slider {...settings}>
        {reviewers.map((rev, index) => (
          <div key={index} className="px-3">
            <div className="border-2 rounded-2xl border-quinary p-5 bg-primary h-full">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={rev.image}
                  alt={rev.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover w-16 h-16"
                />
                <div>
                  <h1 className="text-quaternary font-semibold">
                    {rev.name}
                  </h1>
                  <h1 className="text-secondary text-sm">{rev.username}</h1>
                </div>
              </div>
              <p className="text-quaternary">{`"${rev.review}"`}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Reviewers;



