import Question from '../models/question.model.js';
import userModel from '../models/user.model.js';

export const submitQuiz = async (req, res) => {
    const { userId, score } = req.body;

    try {
        const user = await userModel.findById(userId);
        user.score = score;
        await user.save();

        const recommendedVideos = [];
        // for (let subskill of user.subskills) {
        //     const videos = await Video.find({ subskill });
        //     recommendedVideos.push(...videos);
        // }

        res.status(200).json({ recommendedVideos });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getQuiz = async (req, res) => {
    const { subskills } = req.body;  
    console.log(subskills)

    try {
        const questions = await Question.aggregate([
            { $match: { subskill: { $in: subskills } } },  
            { $sample: { size: 10 } } 
        ]);

        res.status(200).json({ questions });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
