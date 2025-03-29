export default function MembershipFirst() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 md:p-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-6 text-black">
              Member<span className="text-[#00B0F0]">ships</span>
            </h1>
            <p className="text-gray-600 text-xl mb-8 leading-relaxed max-w-lg">
              Be part of global network of leaders dedicated to making a difference in diverse sectors.
            </p>
            <button className="bg-[#00B0F0] text-white px-6 py-3 rounded-md hover:bg-[#009dd6] transition-colors">
              Apply for Membership
            </button>
          </div>
  
          {/* Right Image */}
          <div className="lg:w-1/2">
            <div className="bg-[#00B0F0] rounded-3xl p-8">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
                alt="Business collaboration"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </main>
    );
  }