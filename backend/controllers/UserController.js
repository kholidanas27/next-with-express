import User from "../models/User/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const Users = await User.findAll();
    res.json(Users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const UserData = await User.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(UserData[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.json({
      message: "User Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
