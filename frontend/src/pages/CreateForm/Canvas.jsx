import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import EditableTitle from "../../Components/EditableTitle";
import InputBox from "../../Components/InputBox";
import DropdownBox from "../../Components/DropdownBox";
import Checkbox from "../../Components/Checkbox";
import RadioButton from "../../Components/RadioButton";

function Canvas({ fields }) {
    const { setNodeRef } = useDroppable({
        id: "canvas", // Unique ID for the droppable area
    });

    const [selectedOptions, setSelectedOptions] = useState({});

    function handleCheckboxChange(checked, option) {
        console.log(checked, option);
        if (checked) {
            setSelectedOptions((prev) => ({ ...prev, [option]: checked }));
        } else {
            setSelectedOptions((prev) => {
                const newOptions = { ...prev };
                delete newOptions[option];
                return newOptions;
            });
        }
    }

    return (
        <div
            ref={setNodeRef}
            className="flex flex-col flex-1 items-start p-4 bg-gray-600 rounded-lg min-h-screen shadow-md"
        >
            <EditableTitle defaultTitle="Canvas" />
            {fields.length === 0 && (
                <p className="text-gray-500">
                    Drop fields here to start building your form.
                </p>
            )}
            <div className="flex flex-col gap-4 mt-4 w-full p-4 mb-2 bg-white rounded-lg shadow-sm text-gray-800">
                {fields.map((field, index) => (
                    <div key={index}>
                        <EditableTitle defaultTitle={field.fieldName} />
                        {field.type === "text" && <InputBox type="text" />}
                        {field.type === "date" && <InputBox type="date" />}
                        {field.type === "password" && (
                            <InputBox type="password" />
                        )}
                        {field.type === "dropdown" && (
                            <DropdownBox options={field.options} />
                        )}
                        {field.type === "checkbox" && (
                            <Checkbox
                                options={field.options}
                                checked={selectedOptions}
                                onChange={handleCheckboxChange}
                            />
                        )}
                        {field.type === "radio" && (
                            <RadioButton
                                radioname={field.fieldName}
                                options={field.options}
                                checked={selectedOptions}
                                onChange={handleCheckboxChange}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Canvas;
