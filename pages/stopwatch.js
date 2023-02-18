import { useState } from 'react';

function StopWatch() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  let myTimer = setInterval(() => {
    const date = new Date();
    setHour(date.getHours());
    setMinute(date.getMinutes());
    setSecond(date.getSeconds());
  }, 500);

  const stopWatch = () => {
    clearInterval(myTimer);
    const date = new Date();
    setSecond(date.getSeconds());
  };

  return (
    <div>
      <h1>Stop Watch</h1>
      <div>
        <span>{hour} :</span> <span>{minute} :</span> <span>{second}</span>
      </div>
      <button onClick={() => stopWatch()}>Stop</button>
    </div>
  );
}

export default StopWatch;
