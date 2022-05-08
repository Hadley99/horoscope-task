import { Card } from "primereact/card";
import React from "react";
import { Chip } from "primereact/chip";
const HoroscopeResult = ({ result }) => {
  return (
    result && (
      <div className="w-full flex-1">
        <Card className="p-4 py-0 shadow-none">
          <div className="grid">
            <div className="col-12 md:col-5">
              <p className="text-5xl md:text-5xl capitalize font-medium font-bold mb-1 md:mb-3">
                {result.name}
              </p>
            </div>
            <div className="col-12 md:col-7">
              <h3 className="md:text-5xl md:text-right  text-gray-400 capitalize font-medium font-bold ">
                {result.current_date}
              </h3>
            </div>
          </div>

          <div className="grid grid-nogutter">
            <div className="col-4 md:col-6">
              <Chip
                label={result.sign}
                className="my-2 font-bold capitalize custom-chip"
              />
            </div>
            <div className="col-8 flex justify-content-end md:col-6">
              <Chip
                label={result.date_range}
                className="my-2 font-bold custom-chip"
              />
            </div>
          </div>
          <div className="flex align-items-center capitalize flex-wrap"></div>

          <div
            className={
              result.isDateInRange
                ? "bg-green-100 text-lg px-3 py-1 mb-3 text-green-900 border-round"
                : "bg-blue-100 text-lg px-3 py-1 mb-3 text-blue-900 border-round"
            }
          >
            {result.description}
          </div>
        </Card>
      </div>
    )
  );
};

export default HoroscopeResult;
