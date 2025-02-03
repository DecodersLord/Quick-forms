import { useState } from "react";

function DropdownBox({ options }) {
    const [selectedOption, setSelectedOption] = useState();

    function handleSelectionChange(event) {
        setSelectedOption(event.target.value);
    }
    return (
        <select value={selectedOption} onChange={handleSelectionChange}>
            {options.map((option) => (
                <option
                    key={option}
                    value={option}
                    selected={option === selectedOption}
                >
                    {option}
                </option>
            ))}
        </select>
    );
}

export default DropdownBox;
