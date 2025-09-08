import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="bg-black bg-[url('/images/home-img.png')] bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 text-white w-4/5 sm:max-w-96 mx-auto sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Dan&apos;s Computer <br /> Repair Shop
          </h1>
          <address>
            555 Gateway Lane <br />
            Kansas City, KS 55555
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href={"tel:5558876333"} className="hover:underline">
            555-887-6333
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
