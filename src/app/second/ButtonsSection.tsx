"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ButtonsSection = ({
  main,
  first,
  second,
}: {
  main?: boolean;
  first?: boolean;
  second?: boolean;
}) => {
  const router = useRouter();

  return (
    <section className="flex flex-col space-y-3">
      {main && (
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          go to main
        </button>
      )}

      {first && (
        <button
          onClick={() => {
            router.push("/first");
          }}
        >
          go to first
        </button>
      )}

      {second && (
        <button
          onClick={() => {
            router.push("/second");
          }}
        >
          go to second
        </button>
      )}
    </section>
  );
};

export default ButtonsSection;
