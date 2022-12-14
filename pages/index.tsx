import { client } from '../libs/client';
import type { InferGetStaticPropsType, NextPage } from 'next';
import type { Blog } from '../types/article';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  blogs: Array<Blog>;
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs
}: Props) => {
  return (
    <div className="bg-black">
      <Head>
        <title>記事一覧 | Mobile Developer Docs</title>
        <meta name="description" content="iOS & Android Developer Documentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="container text-white font-bold text-lg mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {blogs.map(blog => (
          <div className="shadow-lg p-3 mb-5 bg-zinc-700 rounded" key={blog.id}>
            <img
              className="w-full"
              src={blog.eyecatch.url}
              alt="Sunset in the mountains"
            />
            <div className="transition ease-in-out delay-150 text-white hover:text-zinc-600 duration-30 px-6 py-4 font-bold text-lg">
              <Link href={`/article/${blog.id}/`} passHref>
                <a>{blog.title}</a>
              </Link>
            </div>
            <div className="px-6 pt-4 pb-2">
              {blog.category && (
                <span className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;