import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNewUser = async (req, res) => {
  try {
    let maxId;
    const maxIdDoc = await User.findOne().sort({ id: -1 }).limit(1);
    if (maxIdDoc) {
      maxId = maxIdDoc.id;
    } else {
      console.log("No max id found");
    }
    const newId = maxId + 1;
    const user = new User({
      id: newId,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      avatar: req.body.avatar,
      domain: req.body.domain,
      available: req.body.available
    })
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findOneAndUpdate({ id: id }, req.body, { new: true });
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: `Cannot find the user with id: ${id}` });
    } else {
      const user = await User.findOne({ id: id });
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findOneAndDelete({ id: id });
    if (!deletedUser) {
      return res
        .status(404)
        .json({ message: `Couldn't find the user by id: ${id}` });
    } else {
      res.status(200).json(deletedUser);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
