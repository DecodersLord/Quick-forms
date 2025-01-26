import Field from "../models/fields.model.js";

export const getFields = async (req, res) => {
    try {
        const fields = await Field.find();
        res.status(200).json(fields);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createField = async (req, res) => {
    try {
        const field = req.body;
        const newField = new Field(field);
        await newField.save();
        res.status(201).json(newField);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
