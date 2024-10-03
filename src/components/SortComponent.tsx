import { FC } from "react";

const SortComponent: FC = () => {
  return (
    <div className="w-48 ">
      <div >
        <select
        className="w-full h-[32px] marker:bg-[#3D4466] text-[#97A0CC] text-base rounded-l-lg rounded-r-lg">
        <option value="" disabled selected>Sort By </option>
          <option value="Ascending">Ascending </option>
          <option value="Descending">Descending </option>
        </select>
      </div>
    </div>
  );
};

export default SortComponent;
