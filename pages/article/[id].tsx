import { GetServerSideProps } from 'next';
import type { Blog } from '../../types/article';
import { client } from '../../libs/client';

type Props = {
  blog: Blog;
};

export default function Article({ blog }: Props) {
  return (
    <div className="bg-slate-800 py-10">
      <div className="rounded-lg bg-black max-w-screen-md py-10 mx-auto">
        <div className="flex justify-center">
          <img
            className="object-cover w-4/5 h-4/5"
            src={blog.eyecatch.url}
          />
        </div>
        <div className="px-10 py-5 mt-2">
          <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-white">
            {blog.title}
          </div>
          {blog.category && (
            <div className="flex items-center justify-start mt-4 mb-4">
              <div className="text-sm px-2 py-1 font-bold bg-indigo-400 text-white rounded-full">
                #{blog.category}
              </div>
            </div>
          )}
          <div className="mt-2">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blogs',
    contentId: idExceptArray,
  });

  return {
    props: {
      blog: data,
    },
  };
};