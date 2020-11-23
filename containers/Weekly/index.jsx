import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Weekly = ({ times }) => (
  <div className="w-full h-full weekly">
    <table>
      <thead>
        <tr>
          <th>
            <span />
          </th>
          <th>
            <span className="long">Pazartesi</span>
            <span className="short">Paz</span>
          </th>
          <th>
            <span className="long">Salı</span>
            <span className="short">Salı</span>
          </th>
          <th>
            <span className="long">Çarşamba</span>
            <span className="short">Çrş</span>
          </th>
          <th>
            <span className="long">Perşembe</span>
            <span className="short">Prş</span>
          </th>
          <th>
            <span className="long">Cuma</span>
            <span className="short">Cuma</span>
          </th>
          <th>
            <span className="long">Cumartesi</span>
            <span className="short">Cmrts</span>
          </th>
          <th>
            <span className="long">Pazar</span>
            <span className="short">Pzr</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {times.map((time, i) => (
          <tr>
            <td>
              {i + 1}
              :00
            </td>
            <td className={time[0] ? 'bg-green-500' : 'bg-red-500'}>
              <div className="w-full flex-full">
                {time[0] ? <AiOutlineCheck /> : <AiOutlineClose />}
              </div>
            </td>
            <td className={time[1] ? 'bg-green-500' : 'bg-red-500'}>
              <div className="w-full flex-full">
                {time[1] ? <AiOutlineCheck /> : <AiOutlineClose />}
              </div>
            </td>
            <td className={time[2] ? 'bg-green-500' : 'bg-red-500'}>
              <div className="w-full flex-full">
                {time[2] ? <AiOutlineCheck /> : <AiOutlineClose />}
              </div>
            </td>
            <td className={time[3] ? 'bg-green-500' : 'bg-red-500'}>
              <div className="w-full flex-full">
                {time[3] ? <AiOutlineCheck /> : <AiOutlineClose />}
              </div>
            </td>
            <td className={time[4] ? 'bg-green-500' : 'bg-red-500'}>
              <div className="w-full flex-full">
                {time[4] ? <AiOutlineCheck /> : <AiOutlineClose />}
              </div>
            </td>
            <td className={time[5] ? 'bg-green-500' : 'bg-red-500'}>
              <div className="w-full flex-full">
                {time[5] ? <AiOutlineCheck /> : <AiOutlineClose />}
              </div>
            </td>
            <td className={time[6] ? 'bg-green-500' : 'bg-red-500'}>
              <div className="w-full flex-full">
                {time[6] ? <AiOutlineCheck /> : <AiOutlineClose />}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
Weekly.propTypes = {
  times: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired,
  ).isRequired,
};
export default Weekly;
