import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div
        className="container mx-auto"
      >
        <h1
          className="text-6xl text-center pt-8"
        >This is Home Page</h1>
        <div
          className="flex items-center justify-center gap-4 my-16"
        >
          <Link
            href='/register'
          >
            <button
              className="border-2 border-black rounded-md p-4 hover:bg-gray-200 active:bg-gray-400 w-[100px]"
            >
              Register
            </button>
          </Link>
          <Link
            href='/login'
          >
            <button
              className="border-2 border-black rounded-md p-4 hover:bg-gray-200 active:bg-gray-400 w-[100px]"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
