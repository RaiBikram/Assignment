import Image from "next/image"

export default function GlobalActCouncil() {
  const councils = [
    {
      id: 1,
      title: "Justice Council",
      icon: "/our-councils/1.webp",
      alt: "Justice scale representing law and justice",
    },
    {
      id: 2,
      title: "Global Affairs Council",
      icon: "/our-councils/2.webp",
      alt: "Globe representing international focus",
    },
    {
      id: 3,
      title: "Sustainable Development Council",
      icon: "/our-councils/3.webp",
      alt: "Sustainable Development Goals",
    },
    {
      id: 4,
      title: "Science & Innovation Council",
      icon: "/our-councils/4.webp",
      alt: "Atom structure representing science",
    },
    {
      id: 5,
      title: "Trade & Commerce Council",
      icon: "/our-councils/5.webp",
      alt: "Handshake representing international trade",
    },
    {
      id: 6,
      title: "Finance Council",
      icon:"/our-councils/6.webp",
      alt: "Financial imagery representing economy",
    },
    {
      id: 7,
      title: "Education Council",
      icon:"/our-councils/7.webp",
      alt: "Graduation cap representing education",
    },
    {
      id: 8,
      title: "Technology Council",
      icon:"/our-councils/8.webp",
      alt: "Network diagram representing connectivity and technology",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h3 className="text-sm font-medium uppercase tracking-wider text-sky-500 mb-2">OUR COUNCILS</h3>
        <h1 className="text-3xl font-bold mb-6 text-black">The Pillars of Global Act Council</h1>
        <p className="max-w-3xl mx-auto text-muted-foreground text-[#101720]">
          The Global Act Council operates through eight specialized councils, each addressing critical aspects of global
          progress. These councils bring together expertise, innovation, and actionable strategies to drive impactful
          change.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {councils.slice(0, 2).map((council) => (
          <div key={council.id} className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] relative group">
            <Image
              src={council.icon || "/placeholder.svg"}
              alt={council.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-xl px-4 py-2 bg-black bg-opacity-50 rounded">
                {council.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {councils.slice(2, 5).map((council) => (
          <div key={council.id} className="bg-gray-100 rounded-lg overflow-hidden aspect-square relative group">
            <Image
              src={council.icon || "/placeholder.svg"}
              alt={council.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-lg px-3 py-1 bg-black bg-opacity-50 rounded">
                {council.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {councils.slice(5, 8).map((council) => (
          <div key={council.id} className="bg-gray-100 rounded-lg overflow-hidden aspect-square relative group">
            <Image
              src={council.icon || "/placeholder.svg"}
              alt={council.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-lg px-3 py-1 bg-black bg-opacity-50 rounded">
                {council.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

