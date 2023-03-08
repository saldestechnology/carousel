import useWindowSize from "@/hooks/useWindowSize";
import { baseUrl } from "@/utils/api";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Item from "./Item";
import cars from "../../pages/api/cars.json";

export default function Carousel() {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const [max_images, _] = useState<number>(4);
  const [items, setItems] = useState<Car[]>([]);

  const next = () => {
    let result = [...items];
    let first = result.shift() as Car;
    result.push(first);
    setItems(result);
  };
  const previous = () => {
    let result = [...items];
    let last = result.pop() as Car;
    setItems([last, ...result]);
  };
  useEffect(() => {
    setItems(cars);
  }, [width]);
  return (
    <div className="container">
      <div ref={ref} className="slideshow">
        {items.slice(0, max_images).map((item, i) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
      <div className="controls">
        <div className="dots">
          {items.map((dot) => (
            <div
              key={dot.id}
              style={{
                height: 8,
                width: 8,
                background: "#000",
                borderRadius: 10,
              }}
            />
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
          touch-action: pan-y;
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
