import Image from 'next/image';

const BlogSection = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center gap-6 p-8 bg-white">
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-blue-500">Blogs</h2>
        <p className="mt-4 text-gray-600">
          We are not just a council; we are a movement, mobilizing the next generation of leaders
          to create impactful change across diverse sectors.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Blog Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-4 max-w-sm">
          <Image
            src="/blog1.jpg" // Replace with actual image path
            alt="Blog 1"
            width={400}
            height={250}
            className="rounded-xl"
          />
          <p className="text-blue-500 text-sm mt-3">Global Act · 3 min read</p>
          <h3 className="text-lg font-semibold mt-1">
            Lorem Ipsum has been the industry’s standard.
          </h3>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-4 max-w-sm">
          <Image
            src="/blog2.jpg" // Replace with actual image path
            alt="Blog 2"
            width={400}
            height={250}
            className="rounded-xl"
          />
          <p className="text-blue-500 text-sm mt-3">Global Act · 3 min read</p>
          <h3 className="text-lg font-semibold mt-1">
            Lorem Ipsum has been the industry’s standard.
          </h3>
          <p className="text-gray-500 mt-1 text-sm">
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p>
          <div className="flex items-center mt-4">
            <Image
              src="/profile.jpg" // Replace with actual profile image path
              alt="Author"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="ml-2 text-gray-600 text-sm">Rohan Karik · Posted 3 days ago</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;