import { azkarElmasaaModel } from "../../../dataBase/models/azkarElmasaa.model.js";

const addZekr = async (req, res) => {
    try {
        const { title, zekr, benefit, count, numOfZekr } = req.body;

        const azkar = await azkarElmasaaModel.findOne({ zekr });

        if (azkar) {
            return res.json({ message: "zekr already added" });
        }

        await azkarElmasaaModel.create({ title, zekr, benefit, count, numOfZekr });

        return res.json({ message: "success" });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}

const getAllAzkar = async (req, res) => {
    try {
        const allAzkar = await azkarElmasaaModel.find();
        res.json({ message: "success", allAzkar });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const updateAzkar = async (req, res) => {
    const { title, zekr, benefit, count, numOfZekr, _id } = req.body;

    try {
        const azkar = await azkarElmasaaModel.findById(_id);

        if (azkar) {
            const updatedZekr = await azkarElmasaaModel.findByIdAndUpdate(
                _id,
                { title, zekr, benefit, count, numOfZekr },
                { new: true }
            );
            return res.json({ message: "updated successfully", updatedZekr });
        } else {
            return res.json({ message: "zekr not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "server error", error: error.message });
    }
};

const deleteAzkar = async (req, res) => {
    const { _id } = req.body;

    try {
        const deletedAzkar = await azkarElmasaaModel.findById(_id);

        if (deletedAzkar) {
            await azkarElmasaaModel.findByIdAndDelete(_id);
            return res.json({ message: "deleted successfully" });
        } else {
            return res.json({ message: "zekr not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "server error", error: error.message });
    }
};


export {
    addZekr, deleteAzkar, getAllAzkar,
    updateAzkar
};

