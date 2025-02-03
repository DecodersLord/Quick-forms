import { useState } from "react";

function InputBox({ type }) {
    const [value, setValue] = useState("");

    function handleValueChange(event) {
        setValue(event.target.value);
    }

    return (
        <>
            <input
                type={type}
                value={value}
                onChange={handleValueChange}
                autoFocus
                className="text-xl font-bold text-gray-900 mb-4 border border-accent rounded px-2 w-lg bg-white"
            />
        </>
    );
}

export default InputBox;
