import React, { lazy, Suspense } from "react";
import transition from "../transition";
const PortoList = lazy(() => import("./PortoList"));

function Portofolio() {
  return (
    <main className="w-full h-full">
      <section className="container h-full pt-6">
        <h1 className="text-sky-700 font-bold text-center md:text-4xl text-2xl">
          PORTOFOLIO
        </h1>
        <div className="w-full grid md:grid-cols-2 items-center gap-6 place-items-center px-4 pt-10 mt-5 pb-10">
          <Suspense
            fallback={<p className="text-center text-xl">Loading....</p>}
          >
            <PortoList />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

export default transition(Portofolio);
