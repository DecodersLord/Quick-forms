import { useDraggable } from "@dnd-kit/core";
import { RxInput } from "react-icons/rx";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoIosCheckbox } from "react-icons/io";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoIosRadioButtonOn } from "react-icons/io";
import { FaFileUpload } from "react-icons/fa";

import useGetFields from "../../hooks/useGetFields";
import LogoutButton from "../../pages/Dashboard/LogoutButton";

function Sidebar() {
    const { fields, loading } = useGetFields();

    return (
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-accent text-gray-700 h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
                    Select Fields
                </h5>
            </div>
            <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                {!loading &&
                    fields.map((field) => (
                        <DraggableField key={field._id} field={field} />
                    ))}
            </nav>
            <LogoutButton />
        </div>
    );
}

function DraggableField({ field }) {
    const fieldIcons = {
        text: <RxInput />,
        dropdown: <IoMdArrowDropdownCircle />,
        checkbox: <IoIosCheckbox />,
        date: <BsCalendar2DateFill />,
        radio: <IoIosRadioButtonOn />,
        file: <FaFileUpload />,
    };
    const { attributes, listeners, setNodeRef } = useDraggable({
        id: field._id,
        data: field, // Pass field data for later use
    });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none cursor-pointer"
        >
            <div className="grid place-items-center mr-4">
                {fieldIcons[field.type]}
            </div>
            {field.fieldName}
        </div>
    );
}

export default Sidebar;
