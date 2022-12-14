import { read } from "fs";
import React, { useEffect, useState } from "react";
import { Z_ERRNO } from "zlib";

type Props = {};

/*
> new:
 . day (100h)          ---86,400,000---ms
 . hour 100 (100m)     ------864,000---ms
 . minute 100 (10s)    --------8,640---ms
 . second 10 (864ms)   ----------864---ms
==========================================
> old:
 . day (24h)           ---86,400,000---ms
 . hour 24 (60m)       ----3,600,000---ms
 . minute 60 (60s)     -------60,000---ms
 . second 60 (1000ms)  --------1,000---ms
*/

const Home = (props: Props) => {
  const time = {
    new: {
      hour: 864000,
      minute: 8640,
      second: 864,
    },
    old: {
      hour: 3600000,
      minute: 60000,
      second: 1000,
    },
  };

  function currentTime(): number {
    const currentDate = new Date();

    return (
      currentDate.getHours() * time.old.hour +
      currentDate.getMinutes() * time.old.minute +
      currentDate.getSeconds() * time.old.second
    );
  }

  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const [zeroH, setZeroH] = useState("");
  const [zeroM, setZeroM] = useState("");

  const [ready, setReady] = useState<number>(0);
  const [isPending, setIsPending] = useState<Boolean>(true);

  const zeroSetter = () => {
    hours < 10 ? setZeroH("0") : setZeroH("");

    minutes < 10 ? setZeroM("0") : setZeroM("");
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tikTok = () => {
    setHours(parseInt((currentTime() / time.new.hour).toString()) % 100);
    setMinutes(parseInt((currentTime() / time.new.minute).toString()) % 100);
    setSeconds(parseInt((currentTime() / time.new.second).toString()) % 10);
    zeroSetter();

    ready ? setIsPending(false) : setReady(ready + 1);

    console.log(ready);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      tikTok();
    }, 100); //"This will be called every 100 ms"

    return () => clearInterval(interval);
  }, [tikTok]);

  return (
    <div className="Home">
      {isPending && "Loading..."}
      {!isPending && (
        <>
          {zeroH}
          {hours}:{zeroM}
          {minutes}:{seconds}
        </>
      )}
    </div>
  );
};

export default Home;
