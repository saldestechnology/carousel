import useWindowSize from "@/hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Item from "./Item";
import cars from "./cars.json";
import Dot from "./Dot";

export default function Carousel() {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const [max_images, _] = useState<number>(4);
  const [items, setItems] = useState<Car[]>([]);
  const [current, setCurrent] = useState<number>(0);

  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    if (touchStart - touchEnd > 50) next();
    if (touchStart - touchEnd < 50) previous();
    // add your conditional logic here
  };
  console.log({ current });
  const handleDots = (n: number) => {
    if (n < 0) {
      setCurrent(cars.length - 1);
      return;
    }
    if (n > cars.length) {
      setCurrent(0);
      return;
    }
    setCurrent(n);
  };

  const next = () => {
    console.log("next");
    handleDots(current + 1);
    let result = [...items];
    let first = result.shift() as Car;
    result.push(first);
    setItems(result);
  };
  const previous = () => {
    console.log("previous");
    handleDots(current - 1 || 0);
    let result = [...items];
    let last = result.pop() as Car;
    setItems([last, ...result]);
  };
  useEffect(() => {
    setItems(cars);
  }, [width]);
  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="container"
    >
      <div ref={ref} className="slideshow">
        {items.slice(0, max_images).map((item, i) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
      <div className="controls">
        <div className="dots">
          {items.map(({ id }, i) => (
            <Dot active={i === current} key={id} />
          ))}
        </div>
        <button onClick={previous}>
          <Icon direction={false} />
        </button>
        <button onClick={next}>
          <Icon direction={true} />
        </button>
      </div>
      <style jsx>{`
        .container {
          height: 55vh;
          max-height: 450px;
          width: 100vw;
          max-width: 1440px;
          margin: 0 auto;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: ease all 1s;
        }
        .slideshow {
          display: -webkit-box;
          height: 100%;
          width: 100%;
        }
        .controls {
          display: flex;
          justify-content: flex-end;
          padding: 0 1em;
          max-width: 100vw;
        }
        .controls button:first-child {
          margin-right: 1em;
        }
        .dots {
          display: none;
        }
        .controls button {
          height: 40px;
          width: 40px;
          padding: 0;
          background: none;
          border: none;
          outline: none;
        }
        @media (max-width: 712px) {
          .container {
            height: 70vh;
          }
          .dots {
            display: flex;
            width: 60%;
            margin: 0 auto;
            flex-direction: row;
            justify-content: space-around;
          }
          .controls {
            width: 100%;
          }
          .controls button {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
