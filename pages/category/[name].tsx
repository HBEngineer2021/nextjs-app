import {
    GetStaticProps,
    GetStaticPaths,
    InferGetStaticPropsType,
    NextPage
} from 'next';
import type { Blog } from '../../types/article';
import { client } from '../../libs/client';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Head from 'next/head';
import { data } from 'cheerio/lib/api/attributes';
import Link from 'next/link';
import { ProfileArea } from '../../components/ProfileArea';
import { CategoryArea } from '../../components/CategoryArea';
import { Category } from '../../types/category';

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const data = await client.get({ endpoint: "categories" });

    const paths = data.contents.map((content: Category) => `/category/${content.name}`);
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
    ctx
) => {
    const name = ctx.params?.name
    const data = await client.get({
        endpoint: 'blogs',
        queries: { limit: 100, filters: `category[contains]${name}` }
    });
    const category = await client.get({ endpoint: "categories" });
    return {
        props: {
            blogs: data.contents,
            categories: category.contents,
            title: name,
        },
    };
};

type Props = {
    blogs: Array<Blog>;
    categories: Array<Category>;
    title: string;
};

const CategoryPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
    blogs,
    categories,
    title,
}: Props) => {
    return (
        <div className="w-full h-full">
            <Head>
                <title>カテゴリー - {title} | Mobile Developer Docs</title>
                <meta name="description" content="iOS & Android Developer Documentation" />
                <meta name="theme-color" content="#27272A" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="container text-white font-bold text-lg mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                カテゴリー / {title}
            </h1>
            <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                <div className="container mx-auto p-10 grid grid-cols-1 col-span-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                    {blogs.map(blog => (
                        <div className="shadow-lg p-3 mb-5 bg-zinc-700 rounded transition ease-in-out delay-150 hover:-translate-y-3 hover:bg-zinc-500 duration-200" key={blog.id}>
                            <span>
                                <Link href={`/article/${blog.id}/`} passHref>
                                    <a>
                                        <img
                                            className="w-full"
                                            src={blog.eyecatch.url}
                                            alt="Sunset in the mountains"
                                        />
                                        <div className="transition ease-in-out delay-150 text-white hover:text-zinc-400 duration-30 px-1 py-3 font-bold text-lg">
                                            {blog.title}
                                        </div>
                                        <div className="px-1 py-3">
                                            {blog.category && (
                                                <span className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                    #{blog.category}
                                                </span>
                                            )}
                                        </div>
                                    </a>
                                </Link>
                            </span>
                        </div>
                    ))}
                </div>
                <div>
                    <ProfileArea />
                    <CategoryArea categories={categories} />
                </div>
            </div>
            {/* <PageControl blogs={blogs} /> */}
        </div>
    );
}

export default CategoryPage;