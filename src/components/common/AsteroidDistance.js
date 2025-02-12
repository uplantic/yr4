import React, { useState, useEffect } from "react";

const AsteroidDistance = () => {
  const initialDistance = 27000000; // Starting distance in miles
  const impactDate = new Date("2032-12-22T00:00:00Z").getTime();
  const currentDate = new Date().getTime();
  const timeRemaining = impactDate - currentDate;

  // Assumed average approach speed (~18 km/s or ~11 miles/s)
  const approachSpeedMilesPerSecond = 11;

  const [distance, setDistance] = useState(initialDistance);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const elapsedTime = (impactDate - now) / 1000; // Seconds until impact
      const newDistance = Math.max((elapsedTime * approachSpeedMilesPerSecond) / 1.609, 0); // Convert to miles
      setDistance(newDistance);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-gun-metal">
      <p className="font-display text-4xl mt-2">{distance.toLocaleString()}</p>
      <h2 className="font-sans text-2xl mt-2 text-center">Miles to the Earth</h2>
    </div>
  );
};

export default AsteroidDistance;
