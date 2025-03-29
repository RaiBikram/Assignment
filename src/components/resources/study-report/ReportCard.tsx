import React from "react";


export const studies = [
    {
      id: 1,
      title: "Annual Report 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: 2,
      title: "Annual Report 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: 3,
      title: "Annual Report 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: 4,
      title: "Annual Report 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2073",
    },
    {
      id: 5,
      title: "Annual Report 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2022",
    },
    {
      id: 6,
      title: "Annual Report 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=2070",
    },
  ];
 export type ISdudies={
  id:number;
    title:string;
    image:string;
    description:string;
  }
  export type SdudiesData={
    heading:string;
    studies:ISdudies[]
  }
const ReportCard: React.FC<SdudiesData> = ({ heading, studies }) => {
    return (
      <main className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-8 pl-1 text-black">{heading}</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-2 text-black">{study.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{study.description}</p>
                  <button className="text-sm py-1.5 px-4 bg-white border border-gray-300 rounded text-gray-900 hover:bg-gray-50 transition-colors duration-200">
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  export default ReportCard;