import Image from "next/image"

export default function AboutUsSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-50 opacity-90 z-0" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side with floating illustrations */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Main illustration with people discussing */}
            <div className="absolute bottom-0 right-0 md:right-10 bg-white rounded-lg shadow-lg p-4 w-[280px] md:w-[320px] z-20">
              <Image
                src="/placeholder.svg?height=240&width=300"
                alt="Team collaboration"
                width={300}
                height={240}
                className="rounded"
              />
            </div>

            {/* Top right floating card */}
            <div className="absolute top-0 right-20 md:right-40 bg-white rounded-lg shadow-lg p-3 w-[200px] md:w-[220px] z-10">
              <Image
                src="/placeholder.svg?height=160&width=200"
                alt="Diverse team members"
                width={200}
                height={160}
                className="rounded"
              />
            </div>

            {/* Left floating card */}
            <div className="absolute top-1/4 left-0 bg-white rounded-lg shadow-lg p-3 w-[200px] md:w-[220px] z-30">
              <Image
                src="/placeholder.svg?height=160&width=200"
                alt="Leaders working"
                width={200}
                height={160}
                className="rounded"
              />
            </div>

            {/* Bottom floating card */}
            <div className="absolute bottom-10 right-1/3 bg-white rounded-lg shadow-lg p-3 w-[200px] md:w-[220px] z-10">
              <Image
                src="/placeholder.svg?height=160&width=200"
                alt="Team collaboration"
                width={200}
                height={160}
                className="rounded"
              />
            </div>
          </div>

          {/* Right side with text content */}
          <div className="md:pl-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-blue-500">Us</span>
            </h2>

            <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
              We are not just a council; we are a movement, mobilizing the next generation of leaders to create
              impactful change across diverse sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

