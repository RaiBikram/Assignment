import { BsCalendar3, BsPlayCircle } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

interface StoryCard {
  date: string;
  views: number;
  title: string;
  image: string;
  isLarge?: boolean;
  hasVideo?: boolean;
}

const stories: StoryCard[] = [
  {
    date: "27th Jan 2024",
    views: 199,
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui platea pellentesque in nunc semper amet non eleifend suscipit.",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    isLarge: true,
    hasVideo: true,
  },
  {
    date: "27th Jan 2024",
    views: 199,
    title: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    date: "27th Jan 2024",
    views: 199,
    title: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    date: "27th Jan 2024",
    views: 199,
    title: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    date: "27th Jan 2024",
    views: 199,
    title: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    date: "27th Jan 2024",
    views: 199,
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui platea pellentesque in nunc semper amet non eleifend suscipit.",
    image:
      "https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    isLarge: true,
    hasVideo: true,
  },
];

const StoryCard = ({ story }: { story: StoryCard }) => (
  <div
    className={`relative rounded-2xl overflow-hidden ${
      story.isLarge ? "col-span-2 row-span-2" : ""
    }`}
  >
    <div className="absolute inset-0">
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    </div>

    {story.hasVideo && (
      <div className="absolute inset-0 flex items-center justify-center">
        <BsPlayCircle className="text-white text-6xl opacity-80" />
      </div>
    )}

    <div className="absolute bottom-0 p-6 text-white">
      <div className="flex items-center gap-4 text-sm mb-2 opacity-80">
        <span className="flex items-center gap-1">
          <BsCalendar3 className="text-xs" />
          {story.date}
        </span>
        <span className="flex items-center gap-1">
          <AiOutlineEye className="text-sm" />
          {story.views}
        </span>
      </div>
      <h3
        className={`font-semibold ${story.isLarge ? "text-xl" : "text-base"}`}
      >
        {story.title}
      </h3>
    </div>
  </div>
);

export default function CoucilStories() {
  return (
    <main className=" bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-cyan-500 font-semibold mb-2">COUNCIL STORIES</h2>
          <h1 className="text-3xl font-bold mb-4">Lorem ipsum dolor</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Non eget feugiat sit nulla.
            Faucibus turpis duis in gravida sagittis. Varius at nunc vulputate
            ipsum. Ipsum vitae adipiscing non vulputate vitae tristique
            ultricies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {stories.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </div>
      </div>
    </main>
  );
}
