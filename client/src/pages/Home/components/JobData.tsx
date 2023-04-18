import React from "react";
//@ts-ignore
import { STATIC_DATA } from "../../../constants/constants";

function JobData() {
  return (
    <div className="w-full h-fit bg-cream flex flex-col lg:justify-around py-8 lg:py-12 gap-10 lg:flex-row ">
      {STATIC_DATA.map(
        (
          stat: {
            color: string;
            icon: Function;
            holdings: string;
            title: string;
          },
          id: number
        ) => (
          <div
            className="flex flex-col items-center justify-center gap-4 lg:flex-row "
            key={id}
          >
            <span
              className="stats-icon grid place-items-center text-4xl p-5 rounded-md bg-white "
              style={{ color: stat.color }}
            >
              {<stat.icon />}
            </span>
            <div className="stats-content flex flex-col items-center text-gray lg:items-start">
              <span className="text-prime text-3xl font-bold">
                {stat.holdings}+
              </span>
              <span className="uppercase text-sm font-semibold">
                {stat.title}
              </span>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default JobData;
