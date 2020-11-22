import React from "react";
import {
  FiInstagram,
  FiLinkedin,
  FiDollarSign,
  FiEdit3,
  FiGithub,
} from "react-icons/fi";
import { AiOutlineCrown } from "react-icons/ai";
import { IoMdGlasses } from "react-icons/io";
const Header = () => {
  return (
    <div className="w-full bg-gray-1 relative">
      <div className="max-w-screen-md h-full mx-auto py-4 flex flex-row justify-between">
        <table className="w-full">
          <tr>
            <th>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/talip-furkan-do%C4%9Fan-a96666127/"
                className="w-full text-center flex-full"
              >
                <IoMdGlasses className="mx-1" /> TFD
              </a>
            </th>
            <th>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/yunus-emre-k%C3%B6ker-935019190/"
                className="w-full text-center flex-full"
              >
                <AiOutlineCrown className="mx-1" /> YEK
              </a>
            </th>
            <th>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/%C3%B6mer-faruk-%C3%A7oban-245242190/"
                className="w-full text-center flex-full"
              >
                <FiEdit3 className="mx-1" /> OFC
              </a>
            </th>
            <th>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/korhan-%C3%B6zse%C3%A7en-b7787048/"
                className="w-full text-center flex-full"
              >
                <FiDollarSign className="mx-1" /> K.O.
              </a>
            </th>
          </tr>
          <tr>
            <td>
              <div className="w-1/2 mx-auto flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://www.instagram.com/tfdogan/"
                  className="w-full text-insta-red text-center flex-full"
                >
                  <FiInstagram className="mx-1" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/talip-furkan-do%C4%9Fan-a96666127/"
                  className="w-full text-insta-red text-center flex-full"
                >
                  <FiLinkedin className="mx-1" />
                </a>
              </div>
            </td>
            <td>
              <div className="w-1/2 mx-auto flex items-center justify-center">
                <p className="w-full text-insta-red text-center flex-full">
                  :)
                </p>
                <a
                  target="_blank"
                  href="https://github.com/YEK-PLUS"
                  className="w-full text-insta-red text-center flex-full"
                >
                  <FiGithub className="mx-1" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/yunus-emre-k%C3%B6ker-935019190/"
                  className="w-full text-insta-red text-center flex-full"
                >
                  <FiLinkedin className="mx-1" />
                </a>
              </div>
            </td>
            <td>
              <div className="w-1/2 mx-auto flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://www.instagram.com/omer.faruk.coban/"
                  className="w-full text-insta-red text-center flex-full"
                >
                  <FiInstagram className="mx-1" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/%C3%B6mer-faruk-%C3%A7oban-245242190/"
                  className="w-full text-insta-red text-center flex-full"
                >
                  <FiLinkedin className="mx-1" />
                </a>
              </div>
            </td>
            <td>
              <div className="w-1/2 mx-auto flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/korhan-%C3%B6zse%C3%A7en-b7787048/"
                  className="w-full text-insta-red text-center flex-full"
                >
                  <FiLinkedin className="mx-1" />
                </a>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Header;
