import { DndContext, DragOverlay } from "@dnd-kit/core";
import Sidebar from "./Sidebar.jsx";
import Canvas from "./Canvas.jsx";
import { useState, useEffect } from "react";

function CreateForm() {
    const [canvasFields, setCanvasFields] = useState(() => {
        const savedFields = localStorage.getItem("canvasFields");
        return savedFields ? JSON.parse(savedFields) : [];
    });

    const [activeField, setActiveField] = useState(null); // Track the active draggable field

    // Load fields from local storage when the component mounts
    useEffect(() => {
        const savedFields = localStorage.getItem("canvasFields");
        if (savedFields) {
            setCanvasFields(JSON.parse(savedFields));
        }
    }, []);

    // Save fields to local storage whenever they change
    useEffect(() => {
        localStorage.setItem("canvasFields", JSON.stringify(canvasFields));
    }, [canvasFields]);

    const handleDragStart = (event) => {
        setActiveField(event.active.data.current); // Set the active field being dragged
    };

    const handleDragEnd = (event) => {
        console.log(canvasFields);
        const { active, over } = event;

        if (over && over.id === "canvas") {
            const newField = active.data.current;
            setCanvasFields((prev) => {
                const updatedFields = [...prev, newField];
                localStorage.setItem(
                    "canvasFields",
                    JSON.stringify(updatedFields)
                ); // Save to localStorage immediately
                return updatedFields;
            });
        }

        setActiveField(null); // Reset active field after drop
    };

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="flex">
                <Sidebar />
                <Canvas fields={canvasFields} />
                {/* Drag Overlay */}
                <DragOverlay>
                    {activeField && (
                        <div className="p-3 bg-blue-100 rounded-lg shadow-lg text-gray-700">
                            {activeField.fieldName}
                        </div>
                    )}
                </DragOverlay>
            </div>
        </DndContext>
    );
}

export default CreateForm;
