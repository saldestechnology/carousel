import React, { useState, useEffect } from "react";
import Image from "next/image";

const Chevron = () => (
  <svg height={12} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 1.5l4 4-4 4"
      fill="none"
      stroke="#1c6bba"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
);

interface ItemProps {
  item: Car;
}

export default function Item({ item }: ItemProps) {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    setAnimate(true);
    return () => {
      setAnimate(false);
    };
  }, [animate]);
  return (
    <div key={item.id} className="item">
      <main className="main">
        <section className="header">
          <div className="category">
            <span className="text">{item.bodyType}</span>
          </div>
          <div className="title">
            <p className="text black">{item.modelName}</p>
            <p className="text grey">{item.modelType}</p>
          </div>
        </section>
        <section className="body">
          <Image fill src={item.imageUrl} alt={item.modelName} />
        </section>
        <section className="footer">
          <a href="#">
            Learn <Chevron />
          </a>
          <a href="#">
            Shop <Chevron />
          </a>
        </section>
      </main>
      <style jsx>{`
        .item {
          width: 100%;
          max-width: 25%;
          height: 100%;
          max-height: 410px;
          padding: 0 1em;
        }
        .main {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .header {
          display: flex;
          flex-direction: column;
          padding: 1em 0;
        }
        .category {
          padding: 0.5em 0;
        }
        .category .text {
          font-weight: 600;
          text-transform: uppercase;
          color: grey;
        }
        .title {
          display: flex;
          padding: 0.5em 0;
          gap: 0.2em;
        }
        .title > .text.black {
          font-weight: 600;
          color: #0e0e0e;
        }
        .title > .text.grey {
          color: grey;
        }
        .title > .text {
          font-size: 1.5em;
        }
        .body {
          position: relative;
          height: 100%;
          width: 100%;
          aspect-ratio: 2 / 1;
        }
        .footer {
          display: flex;
          justify-content: space-around;
          padding: 2em;
          color: #326bb4;
          text-transform: uppercase;
          font-weight: 600;
        }
        @media (max-width: 992px) {
          .item {
            width: 33.333%;
            max-width: 33.33%;
          }
        }
        @media (max-width: 768px) {
          .item {
            width: 50%;
            max-width: 50%;
          }
        }
        @media (max-width: 712px) {
          .category .text {
            font-size: 0.8em;
          }
          .title > .text {
            font-size: 1em;
          }
          .item {
            width: 85%;
            max-width: 85%;
          }
        }
      `}</style>
    </div>
  );
}
