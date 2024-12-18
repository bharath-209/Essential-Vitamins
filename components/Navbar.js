"use client"; // Add this directive at the top to make it a client component

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // Update time and date every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      // Format time (HH:MM:SS)
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(formattedTime);

      // Format date (e.g., Saturday, Apr 20, 2024)
      const formattedDate = now.toLocaleDateString([], {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setCurrentDate(formattedDate);
    }, 1000);

    return () => clearInterval(timer); // Clean up interval
  }, []);

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Side: Logo Image */}
        <div>
          <Image
            src="/images/logo.jpg" // Path to your logo image
            alt="Logo"
            width={120}
            height={40}
          />
        </div>

        {/* Right Side: Display Date and Time */}
        <div className="text-gray-700 font-medium text-lg flex flex-col items-end">
          <span>{currentDate}</span>
          <span>{currentTime}</span>
        </div>
      </div>
    </header>
  );
}
