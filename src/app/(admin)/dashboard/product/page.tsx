"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=Indonesia1234",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Succes");
      }
    }
  };
  return (
    <div>
      <h1>{status}</h1>
      <button
        className="bg-black p-3 m-5 text-white"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
