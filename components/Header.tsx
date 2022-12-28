import Link from 'next/link'

export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-zinc-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={'/'} passHref>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-white">App.Dev Docs</span>
          </a>
        </Link>
      </div>
    </header>
  )
}