import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileLogo from '../assets/profilelogo.svg';
import Navbar2 from "./Navbar2";
import BuyerCard from "./buyercard";

const buyers = [
  { name: 'Global Grocers', type: 'Wholesale Buyer', location: 'Mumbai, Maharashtra' },
  { name: 'FreshMart', type: 'Retail Buyer', location: 'Delhi, Delhi' },
  { name: 'Agro Traders', type: 'Export Buyer', location: 'Chennai, Tamil Nadu' },
  { name: 'Farm Fresh', type: 'Local Buyer', location: 'Bangalore, Karnataka' },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [filterBy, setFilterBy] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col min-h-[100vh]">
        <main className="flex-1">
          <section className="bg-primary pt-12 md:py-10">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for buyers"
                    className="pr-12 w-full rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-between">
                <p className="text-muted-foreground text-gray-700 ml-4 hidden md:block">
                  Filter your search to find the perfect buyers
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <select
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                  >
                    <option value="">Filter by</option>
                    <option value="wholesale">Wholesale Buyer</option>
                    <option value="retail">Retail Buyer</option>
                    <option value="export">Export Buyer</option>
                    <option value="local">Local Buyer</option>
                  </select>
                  <select
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Sort by</option>
                    <option value="name">Name</option>
                    <option value="location">Location</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Search by location"
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  />
                </div>
              </div>
              <BuyerCard />
              <br />
              <BuyerCard />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
