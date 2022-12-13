import { client } from '../libs/client';
import type { Blog } from '../types/article';
import Link from 'next/link';

type Props = {
  blogs: Array<Blog>;
};

export default function Home({ blogs }: Props) {
  return (
    <div className="bg-black">
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {blogs.map(blog => (
          <div className="shadow-lg p-3 mb-5 bg-gray-800 rounded" key={blog.id}>
            <img
              className="w-full"
              src={blog.eyecatch.url}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 text-white font-bold text-lg">
              <Link href={`/article/${blog.id}`} passHref>
                <a>{blog.title}</a>
              </Link>
            </div>
            <div className="px-6 pt-4 pb-2">
              {blog.category && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{blog.category}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blogs' });
  return {
    props: {
      blogs: data.contents,
    },
  };
};