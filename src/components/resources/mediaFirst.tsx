export default function MediaFirstPage() {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-12">
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-6 text-black">Medias</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Curabitur duis non quis quam eget dui cursus suspendisse. Enim amet posuere aliquet pharetra. Aliquam amet non tellus arcu vitae eleifend aliquam. Vitae nisl leo non cras.
          </p>
        </div>
        
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Team collaboration" 
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </div>
    );
  }