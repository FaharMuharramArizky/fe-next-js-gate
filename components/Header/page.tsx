"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
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

            setCurrentDate(`${formattedDate}`);
            setCurrentTime(`${formattedTime}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex flex-col gap-4 bg-white shadow-md sticky top-0 z-50 p-4">
            <div className="w-full flex flex-row justify-between items-center">
                <Image
                    src="/samudera.png"
                    alt="Logo"
                    width={300}
                    height={80}
                    priority
                />
                <div className="flex items-center text-lg font-semibold">
                    <p className="text-gray-700">
                        {currentDate}{" "}
                        <span className="text-red-500 font-bold ml-2">{currentTime}</span>
                    </p>
                </div>
            </div>
            <div className="text-center font-bold text-3xl text-black mb-2">
                <p>GATE OUT RECEIVING / DELIVERY - (GATE 02)</p>
            </div>
        </div>
    );
}
