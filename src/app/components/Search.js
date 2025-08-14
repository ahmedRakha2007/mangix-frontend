"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import axiosInstance from '@/lib/axiosInstance'
import debounce from 'lodash.debounce'
import { useCallback, useRef, useEffect, useState } from 'react'
const Search = () => {

const [query, setQuery] = useState("");
const [results, setResults] = useState([]);
const [loading, setLoading] = useState(false);
const [showResults, setShowResults] = useState(true)
const containerRef = useRef(null)

  const fetchSearch = useCallback(
    debounce(async (q) => {
      if (!q.trim()) {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        const res = await axiosInstance(`/search?q=${q}`);
        setResults(res.data.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

 useEffect(() => {
    fetchSearch(query);
  }, [query]);

useEffect(() => {
  function handleClickOutside(event) {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowResults(false);
    }
  }

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);
  return (
        <div ref={containerRef} className="relative xl:w-[450px] lg:w-[300px] md:w-[200px] w-[180px]">
  <input
    type="text"
    value={query}
    onFocus={() => {setShowResults(true)}}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search products..."
    className=" w-full bg-quinary px-2 py-2 rounded-4xl focus focus:outline-none focus:ring-1 focus:ring-tertiary"
  />

  {loading && <div className="absolute top-full left-0 p-2">Loading...</div>}

  {showResults && !loading && results.length > 0 && (
    <ul className="absolute top-full left-0 w-full bg-quinary  rounded shadow max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-quaternary scrollbar-track-quinary" style={{zIndex: 1000}}>
      {results.map((item) => (
        <li
          key={item.id}
        >
          <Link href={`/shop/${item.type}s/${item.id}`} className='flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer'>
            {/* Product Image */}
            <Image
              src={item.photo}
              alt={item.title}
              className="w-12 h-16 object-cover rounded"
              width={300}
              height={300}
            />

            {/* Product Info */}
            <div className="flex flex-col">
              <span className="font-medium text-gray-800 truncate">{item.title}</span>
              <span className="text-sm text-gray-500">Genre: {item.genre}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>
  )
}

export default Search