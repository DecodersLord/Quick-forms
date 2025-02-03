import { useState } from "react";

function EditableTitle({ defaultTitle }) {
    const [title, setTitle] = useState(defaultTitle);
    const [isEditing, setIsEditing] = useState(false);

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function enableEditing() {
        setIsEditing(true);
    }

    function disableEditing() {
        setIsEditing(false);
    }

    return isEditing ? (
        <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            onBlur={disableEditing}
            onKeyDown={(e) => e.key === "Enter" && disableEditing()}
            autoFocus
            className="text-xl font-bold text-accent mb-4 bg-transparent border border-accent rounded px-2 w-fit"
        />
    ) : (
        <h3
            className="text-xl font-bold text-accent mb-4 cursor-pointer"
            onDoubleClick={enableEditing}
        >
            {title}
        </h3>
    );
}

export default EditableTitle;
