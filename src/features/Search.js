import { useState } from "react"
import { Link } from "react-router-dom"
import ProfileLogo from '../assets/profilelogo.svg'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [filterBy, setFilterBy] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
    // const farmers = []
  const farmers = [
    {
      name: "Raj Kumar",
      type: "Organic Farmer",
      location: "Jaipur, Rajasthan",
      phone: "+91 9876543210",
    //   image: "/placeholder.svg",
    },
    {
      name: "Priya Sharma",
      type: "Dairy Farmer",
      location: "Amritsar, Punjab",
      phone: "+91 9876543211",
    //   image: "/placeholder.svg",
    },
    {
      name: "Aditya Patel",
      type: "Vegetable Farmer",
      location: "Ahmedabad, Gujarat",
      phone: "+91 9876543212",
    //   image: "/placeholder.svg",
    },
    {
      name: "Neha Gupta",
      type: "Fruit Farmer",
      location: "Bhopal, Madhya Pradesh",
      phone: "+91 9876543213",
    //   image: "/placeholder.svg",
    },
    {
      name: "Hari Krishna",
      type: "Spice Farmer",
      location: "Kochi, Kerala",
      phone: "+91 9876543214",
    //   image: "/placeholder.svg",
    },
    {
      name: "Nisha Reddy",
      type: "Organic Farmer",
      location: "Hyderabad, Telangana",
      phone: "+91 9876543215",
    //   image: "/placeholder.svg",
    },
    {
      name: "Ravi Singh",
      type: "Dairy Farmer",
      location: "Lucknow, Uttar Pradesh",
      phone: "+91 9876543216",
    //   image: "/placeholder.svg",
    },
    {
      name: "Pooja Chopra",
      type: "Vegetable Farmer",
      location: "Kolkata, West Bengal",
      phone: "+91 9876543217",
    //   image: "/placeholder.svg",
    },
  ]
//   const filteredFarmers = farmers
//     .filter((farmer) => {
//       return (
//         farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (filterBy === "" || farmer.type.toLowerCase() === filterBy.toLowerCase()) &&
//         (locationFilter === "" || farmer.location.toLowerCase().includes(locationFilter.toLowerCase()))
//       )
//     })
//     .sort((a, b) => {
//       switch (sortBy) {
//         case "featured":
//           return b.featured - a.featured
//         case "newest":
//           return new Date(b.date) - new Date(a.date)
//         case "low":
//           return a.price - b.price
//         case "high":
//           return b.price - a.price
//         case "location":
//           return a.location.localeCompare(b.location)
//         default:
//           return 0
//       }
//     })

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="p-4 flex justify-between items-center bg-green-600 text-white pb-6">
        <Link to="/">
          <p className="text-2xl font-semibold md:hidden">
            🌱 
          </p>
          <p className="text-2xl font-semibold font-sans ml-2 hidden md:block">
            🌱 Assured Contract Farming
          </p>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/about" className='ml-4 hover:underline'>
            About
          </Link>
          <Link to="/contact" className='ml-4 mr-3 hover:underline'>
            How It Works
          </Link>
          <Link to="/login">
            <img 
              src={ProfileLogo} alt="profilelogo"
              className="h-6 w-6 mr-2 ">
            </img>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="bg-primary py-12 md:py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for crops"
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
            <div className="mb-8 md:mb-12 flex items-center justify-between">
              <p className="text-muted-foreground">Filter your search to find the perfect farmers</p>
              <div className="flex items-center gap-4">
                {/* <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <FilterIcon className="h-5 w-5" />
                      <span>Filter by</span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={() => setFilterBy("")} className={filterBy === "" ? "bg-muted" : ""}>
                      All
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setFilterBy("organic")}
                      className={filterBy === "organic" ? "bg-muted" : ""}
                    >
                      Organic Farmers
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setFilterBy("dairy")}
                      className={filterBy === "dairy" ? "bg-muted" : ""}
                    >
                      Dairy Farmers
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setFilterBy("vegetable")}
                      className={filterBy === "vegetable" ? "bg-muted" : ""}
                    >
                      Vegetable Farmers
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setFilterBy("fruit")}
                      className={filterBy === "fruit" ? "bg-muted" : ""}
                    >
                      Fruit Farmers
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setFilterBy("spice")}
                      className={filterBy === "spice" ? "bg-muted" : ""}
                    >
                      Spice Farmers
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ListOrderedIcon className="h-5 w-5" />
                      <span>Sort by</span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onSelect={() => setSortBy("featured")}
                      className={sortBy === "featured" ? "bg-muted" : ""}
                    >
                      Featured
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setSortBy("newest")}
                      className={sortBy === "newest" ? "bg-muted" : ""}
                    >
                      Newest
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => setSortBy("low")} className={sortBy === "low" ? "bg-muted" : ""}>
                      Price: Low to High
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setSortBy("high")}
                      className={sortBy === "high" ? "bg-muted" : ""}
                    >
                      Price: High to Low
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setSortBy("location")}
                      className={sortBy === "location" ? "bg-muted" : ""}
                    >
                      Location
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> */}
                <input
                  type="text"
                  placeholder="Search by location"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredFarmers.map((farmer) => (
                <Card
                  key={farmer.name}
                  className="transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
                >
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt={farmer.name}
                    className="rounded-t-md object-cover w-full h-48"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold">{farmer.name}</h3>
                      <Link href="#" className="text-blue-600 underline" prefetch={false}>
                        View Full Profile
                      </Link>
                    </div>
                    <p className="text-muted-foreground mb-4">{farmer.type}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <LocateIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{farmer.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 w-full">
                      <Button className="w-full h-12">Chat Now</Button>
                      <Button className="w-full h-12">Call</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>
        </section>
      </main>
    </div>
  )
}

