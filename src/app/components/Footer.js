import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-quinary py-10 px-5 lg:px-20 mt-20">
      <div className="flex flex-col sm:flex-row justify-between gap-10">
        {/* Left: Brand & About */}
        <div>
          <h2 className="text-xl font-bold text-black mb-2">Book Verse</h2>
          <p className="text-sm text-black/70 max-w-sm leading-relaxed">
            Dive into your next adventure. Manga, comics, and more — all in one place.
          </p>
        </div>

        {/* Right: Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">Explore</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <Link href="/" className="text-black hover:text-tertiary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-black hover:text-tertiary transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-tertiary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-black/20 pt-4 text-center text-sm text-black/60">
        © {new Date().getFullYear()} Book Verse. All rights reserved.
      </div>
    </footer>
  );
};

export default React.memo(Footer);

