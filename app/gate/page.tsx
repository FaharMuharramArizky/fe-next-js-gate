"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function GatePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentTime.toLocaleString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row p-4 justify-between">
        <Image src="/samudera.png" alt="My awesome image" width={300} height={100}></Image>
        <div className="flex items-center text-lg">
          <p>
            {formattedDate} <span className="text-red-500">{formattedTime}</span>
          </p>
        </div>
      </div>
      <div className="text-center font-bold text-2xl">
        <p>GATE OUT RECEIVING / DELIVERY (GATE 02)</p>
      </div>
    </div>
  );
}
