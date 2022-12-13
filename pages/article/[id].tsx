import { GetServerSideProps } from 'next';
import type { Blog } from '../../types/article';
import { client } from '../../libs/client';
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";

type Props = {
  blog: Blog;
};

export default function Article({ blog }: Props) {
  return (
    <div className="bg-black py-10">
      <div className="rounded-md bg-gray-800 max-w-screen-md p-10 mx-auto">
        <div className="flex justify-center">
          <img
            className="object-cover w-full h-full"
            src={blog.eyecatch.url}
          />
        </div>
        <div className="mt-5">
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
          <div className="mt-5 text-white">
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

  const $ = cheerio.load(data.content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
    },
  };
};