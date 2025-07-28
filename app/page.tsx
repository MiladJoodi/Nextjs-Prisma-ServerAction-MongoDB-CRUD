import Link from "next/link";
import Info from "./actions-demo/Info";

export default function Home() {
  return (
    <div className="font-sans min-h-screen grid place-items-center p-8 sm:p-20">
      <main className="flex flex-col items-start gap-8 max-w-2xl w-full text-left">
        <Info />
        <Link
          href="/actions-demo"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Go to Actions Demo →
        </Link>
      </main>
    </div>
  );
}