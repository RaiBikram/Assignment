import Image from "next/image"

export default function OurTeamPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[400px] bg-gradient-to-br from-white to-sky-50">
      {/* Blue sidebar */}
      <div className="w-full md:w-16 bg-sky-500 h-16 md:h-auto" />

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center p-6 md:p-12 gap-8 max-w-6xl mx-auto">
        {/* Image container */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-md p-4 relative">
            <Image
              src="/our-teams/ourteams.webp"
              alt="Team members discussing in an office setting"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-b text-black">
            Our <span className="text-sky-500">Teams</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are not just a council; we are a movement, mobilizing the next generation of leaders to create impactful
            change across diverse sectors.
          </p>
        </div>
      </div>
    </div>
  )
}

