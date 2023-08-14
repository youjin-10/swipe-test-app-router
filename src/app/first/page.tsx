import React from "react";
import ButtonsSection from "../second/ButtonsSection";

const Page = async () => {
  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const res = await fetch("https://api.github.com/repos/vercel/next.js", {
    cache: "no-store",
  });
  const repo = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1 className="font-bold text-xl">/first !</h1>
      </section>
      <section>{repo.stargazers_count}</section>
      <ButtonsSection main second />
    </main>
  );
};

export default Page;
