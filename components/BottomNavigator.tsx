"use client";

import { MdKeyboardDoubleArrowUp } from "react-icons/md";
type props = {
  location: string;
};
const BottomNavigator = ({ location }: props) => {
  return (
    <a href={`#${location}`}>
      <footer className="flex p-4 items-end justify-center z-10 bottom-0 h-full w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <MdKeyboardDoubleArrowUp className="h-10 w-10 text-white md:h-12 md:w-12 rounded-full filter  opacity-50 hover:opacity-100 cursor-pointer" />
        </div>
      </footer>
    </a>
  );
};

export default BottomNavigator;
