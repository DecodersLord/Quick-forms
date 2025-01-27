import { DndContext, DragOverlay } from "@dnd-kit/core";
import Sidebar from "./Sidebar.jsx";
import Canvas from "./Canvas.jsx";
import { useState } from "react";

function CreateForm() {
    const [canvasFields, setCanvasFields] = useState([]);
    const [activeField, setActiveField] = useState(null); // Track the active draggable field

    const handleDragStart = (event) => {
        setActiveField(event.active.data.current); // Set the active field being dragged
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (over && over.id === "canvas") {
            const newField = active.data.current;
            setCanvasFields((prev) => [...prev, newField]);
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
