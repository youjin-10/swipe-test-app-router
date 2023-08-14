import React from "react";
import ButtonsSection from "./ButtonsSection";

const Page = async () => {
  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const res = await fetch(
    "https://api.github.com/repos/vercel/next.js/branches",
    {
      cache: "no-store",
    }
  );
  const branches = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1 className="font-bold text-xl">/second !</h1>
      </section>
      <section>/second</section>
      <section>{branches[0].name}</section>
      <ButtonsSection main first />
    </main>
  );
};

export default Page;
