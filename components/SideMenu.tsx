import { Category } from '../types/category';

type Props = {
    categories: Array<Category>;
};

export function SideMenu({
    categories,
}: Props) {
    return (
        <div className="pt-10">
            <div className="container mx-auto bg-zinc-700 rounded">
                <div className="container pl-6 pt-6 text-2xl font-semibold text-white">
                    #Category
                </div>
                <div className="container p-6 grid grid-cols-2 gap-2">
                    {categories.map(category => (
                        <div className="p-2">
                            <span className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700" key={category.id}>
                                #{category.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}