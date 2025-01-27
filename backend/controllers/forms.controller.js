import Form from "../models/forms.model.js";

export const getForms = async (req, res) => {
    try {
        const creator = req.user._id;
        console.log(creator);
        const forms = await Form.find({ creator });
        res.status(200).json(forms);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createForms = async (req, res) => {
    try {
        const form = req.body;
        const newForm = new Form(form);
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
