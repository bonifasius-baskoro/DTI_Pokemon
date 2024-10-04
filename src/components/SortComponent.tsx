import { FC, useState } from "react";

interface SortComponentProps {
  updateSortField: (field: "name" | "hp") => void;
}

const SortComponent: FC<SortComponentProps> = ({ updateSortField }) => {
  const [currentSort, setCurrentSort] = useState<"name" | "hp">("hp");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value as "name" | "hp";
    setCurrentSort(newValue);
    updateSortField(newValue);
  };
  return (
    <div className="w-48 ">
      <div>
        <select
          className="w-full h-[32px] marker:bg-[#3D4466] text-[#97A0CC] text-base rounded-l-lg rounded-r-lg"
          value={currentSort}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Sort By{" "}
          </option>
          <option value="hp">Health </option>
          <option value="name">Name </option>
        </select>
      </div>
    </div>
  );
};

export default SortComponent;
