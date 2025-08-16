"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function GatePage() {
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const formattedTime = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setCurrentDate(`${formattedDate} `)
      setCurrentTime(` ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row p-4 justify-between">
        <Image
          src="/samudera.png"
          alt="My awesome image"
          width={300}
          height={100}
        />
        <div className="flex items-center text-lg">
          <p> {currentDate}
            <span className="text-red-500">{currentTime}</span>
          </p>
        </div>
      </div>

      <div className="text-center font-bold text-2xl">
        <p>GATE OUT RECEIVING / DELIVERY - (GATE 02)</p>
      </div>
    </div>
  );
}
