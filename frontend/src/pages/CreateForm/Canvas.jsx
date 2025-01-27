import { useDroppable } from "@dnd-kit/core";

function Canvas({ fields }) {
    const { setNodeRef } = useDroppable({
        id: "canvas", // Unique ID for the droppable area
    });

    return (
        <div
            ref={setNodeRef}
            className="flex flex-col flex-1 justify-center items-center p-4 bg-gray-600 rounded-lg min-h-screen shadow-md"
        >
            <h3 className="text-xl font-bold text-accent mb-4">Canvas</h3>
            {fields.length === 0 && (
                <p className="text-gray-500">
                    Drop fields here to start building your form.
                </p>
            )}
            {fields.map((field, index) => (
                <div
                    key={index}
                    className="p-4 mb-2 bg-white rounded-lg shadow-sm text-gray-800"
                >
                    {field.fieldName}
                </div>
            ))}
        </div>
    );
}

export default Canvas;
