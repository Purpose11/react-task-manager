import { Calendar } from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "../Styles/reactCalendar.css";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="w-full h-[100vh] p-[20px] bg-[#f5f5f5]">
      <h1 className="text-center text-lg lg:text-2xl font-bold mt-[5px]">
        CALENDAR
      </h1>
      <div className="mt-[20px]  mx-0 lg:mx-auto w-full lg:w-[50%] border border-black flex items-center justify-center">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export default ReactCalendar;
