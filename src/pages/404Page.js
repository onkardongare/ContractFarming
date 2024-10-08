import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-8xl font-semibold text-blue-600">404</p>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found !</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-8">
            <Link to='/home'
              className="rounded-md bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-sm"
            >
              Go back home
            </Link>
            <Link to='/contact' className="text-sm  font-semibold text-gray-900 hover:text-gray-600 ">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
