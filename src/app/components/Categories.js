import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    slug: "mangas",
    name: "Manga",
    image: "/2ed18cee554da4948e1a6ec5761cd64f.jpg",
  },
  {
    slug: "comics",
    name: "Comics",
    image: "/2ec0a417dca17238da780daa2cd34312.jpg",
  },
];

const CategorySection = () => {
  return (
    <section className="py-10 px-5 lg:px-20">
      <h1 className="mb-10 text-3xl xl:text-5xl font-semibold text-quaternary">
        Categories
      </h1>

      <div className="grid grid-cols-2 sm:gap-6 gap-3 w-full">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop/${cat.slug}`}
            className="flex items-center sm:gap-4 gap-3 group hover:opacity-90 transition"
          >
            {/* Image */}
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                width={100}
                height={100}
                className="w-[80px] h-[80px] object-cover"
              />
            </div>

            {/* Title & arrow together */}
            <div className="flex items-center sm:gap-2 gap-1">
              <h2 className="text-lg sm:text-xl font-semibold text-quaternary">
                {cat.name}
              </h2>
              <ChevronRight className="text-tertiary group-hover:translate-x-1 transition" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
