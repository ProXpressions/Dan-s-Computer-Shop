import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="bg-black">
      <main>
        <div>
          <h1>
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
