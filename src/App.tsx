import { useState, useEffect } from "react";
import "./App.css";
import moment from "moment";

function App() {
  let schoolStart = new Date(2024, 8, 4, 7, 0).getTime();
  let currentTime = Date.now();
  let [countdown, setCountdown] = useState(
    moment.duration(schoolStart - currentTime)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      setCountdown(moment.duration(schoolStart - currentTime));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (currentTime < schoolStart) {
    return (
      <>
        <div>
          <h1>
            {countdown.months()} Month{countdown.months() != 1 && "s"},{" "}
            {countdown.days()} Day{countdown.days() != 1 && "s"},{" "}
            {countdown.hours()} Hour{countdown.hours() != 1 && "s"},{" "}
            {countdown.minutes()} Minute{countdown.minutes() != 1 && "s"}, and{" "}
            {countdown.seconds()} Second{countdown.seconds() != 1 && "s"} until
            school.
          </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>Go to school! It already started.</h1>
        </div>
      </>
    );
  }
}

export default App;
