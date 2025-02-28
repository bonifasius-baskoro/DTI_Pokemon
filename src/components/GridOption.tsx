import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useSelector";
import { toogleGrid } from "../features/grid";



const GridOption: FC = () => {
    const dispatch=useAppDispatch();
    const activeView = useAppSelector(state=>state.grid)

    const handleViewChange=()=>{
        dispatch(toogleGrid())
    }
  return (
    <div>
      
      <div className="flex w-[64px] justify-center">
        
      <button
        className={`w-8 h-[32px] rounded-l-lg flex justify-center items-center  ${
          activeView === "single" ? "bg-[#3D4466]" : "bg-[#0C1231]"
        }`}
        onClick={() => handleViewChange()}
      >
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="9" height="9" fill="#97A0CC" />
        </svg>
      </button>
      <button
        className={`w-8 h-[32px]  rounded-r-lg flex justify-center items-center ${
          activeView === "double" ? "bg-[#3D4466]" : "bg-[#0C1231]"
        }`}
        onClick={() => handleViewChange()}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="6" height="6" fill="#97A0CC" />
          <rect y="8" width="6" height="6" fill="#97A0CC" />
          <rect x="8" width="6" height="6" fill="#97A0CC" />
          <rect x="8" y="8" width="6" height="6" fill="#97A0CC" />
        </svg>
      </button>
      </div>
    </div>
  );
};

export default GridOption;
