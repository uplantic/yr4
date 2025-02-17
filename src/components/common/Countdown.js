import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-gun-metal font-display text-3xl md:text-5xl flex items-center justify-center gap-4">
          <div>{timeLeft.days}D</div>
          <div>{timeLeft.hours}H</div>
          <div>{timeLeft.minutes}M</div>
          <div className="w-20">{timeLeft.seconds}S</div>
        </div>
        <h3 className="text-gun-metal font-sans text-2xl mt-2 text-center">December 22, 2032</h3>
      </div>
    </div>
  );
};

export default Countdown;
