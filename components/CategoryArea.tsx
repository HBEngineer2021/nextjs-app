import Link from 'next/link';
import { Category } from '../types/category';

type Props = {
    categories: Array<Category>;
};

export function CategoryArea({
    categories,
}: Props) {
    return (
        <div className="container my-16 inline-block mx-auto invisible h-0 lg:visible xl:visible">
            <div className="container mx-auto bg-zinc-700 rounded">
                <div className="container pl-6 pt-6 text-2xl font-semibold text-white">
                    #Category
                </div>
                <div className="container p-6 grid grid-cols-1 xl:grid-cols-2 gap-2">
                    {categories.map(category => (
                        <div className="p-2" key={category.id}>
                            <span className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                <Link href={`/category/${category.name}/`} passHref >
                                    <a>
                                        #{category.name}
                                    </a>
                                </Link>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}