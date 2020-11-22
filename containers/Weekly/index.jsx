import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
const Weekly = ({ times }) => {
  const date = new Date();

  // const now = toTurkishFormatDate(date,"DD")
  // console.log(now,);
  const nowDayNumber = date.getDay() + 0;
  const nowDay = date.getDate() + 7;
  return (
    <div className="w-full h-full weekly">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <span class="long">Pazartesi</span>
              <span class="short">Mon</span>
            </th>
            <th>
              <span class="long">Salı</span>
              <span class="short">Tue</span>
            </th>
            <th>
              <span class="long">Çarşamba</span>
              <span class="short">We</span>
            </th>
            <th>
              <span class="long">Perşembe</span>
              <span class="short">Thur</span>
            </th>
            <th>
              <span class="long">Cuma</span>
              <span class="short">Fri</span>
            </th>
            <th>
              <span class="long">Cumartesi</span>
              <span class="short">Sat</span>
            </th>
            <th>
              <span class="long">Pazar</span>
              <span class="short">Sun</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {times.map((time, i) => {
            return (
              <tr>
                <td>{i + 1}:00</td>
                <td className={time[0] ? "bg-green-500" : "bg-red-500"}>
                  <div className="w-full flex-full">
                    {time[0] ? <AiOutlineCheck /> : <AiOutlineClose />}
                  </div>
                </td>
                <td className={time[1] ? "bg-green-500" : "bg-red-500"}>
                  <div className="w-full flex-full">
                    {time[1] ? <AiOutlineCheck /> : <AiOutlineClose />}
                  </div>
                </td>
                <td className={time[2] ? "bg-green-500" : "bg-red-500"}>
                  <div className="w-full flex-full">
                    {time[2] ? <AiOutlineCheck /> : <AiOutlineClose />}
                  </div>
                </td>
                <td className={time[3] ? "bg-green-500" : "bg-red-500"}>
                  <div className="w-full flex-full">
                    {time[3] ? <AiOutlineCheck /> : <AiOutlineClose />}
                  </div>
                </td>
                <td className={time[4] ? "bg-green-500" : "bg-red-500"}>
                  <div className="w-full flex-full">
                    {time[4] ? <AiOutlineCheck /> : <AiOutlineClose />}
                  </div>
                </td>
                <td className={time[5] ? "bg-green-500" : "bg-red-500"}>
                  <div className="w-full flex-full">
                    {time[5] ? <AiOutlineCheck /> : <AiOutlineClose />}
                  </div>
                </td>
                <td className={time[6] ? "bg-green-500" : "bg-red-500"}>
                  <div className="w-full flex-full">
                    {time[6] ? <AiOutlineCheck /> : <AiOutlineClose />}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Weekly;
