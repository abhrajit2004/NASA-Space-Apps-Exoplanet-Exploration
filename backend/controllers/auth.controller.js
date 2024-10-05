import { User } from "../models/modelUser.js";
import { genTokenAndSendCookie } from "../config/generateToken.js";
// Different controllers for the app

export async function updateAvatar(req, res) {
  try {
    const { avatar } = req.body;
    // // console.log("avatar: ", avatar);
    const user = await User.findById(req.user._id);
    // // console.log("user: ", user);
    user.avatar = avatar;
    user.avatarSelectionRequired = false;
    // // console.log("user.avatar: ", user.avatar);
    // // console.log("user: ", user);
    await user.save();
    res.status(200).json({ success: true, user: user });
  } catch (error) {
    // console.log(error.message);
    res.status(501).json({ success: false, message: "Server Error" });
  }
}

export async function editUser(req, res) {
  try {
    const { username, avatar } = req.body;
    const user = await User.findById(req.user._id);

    if (username) user.username = username;
    if (avatar) user.avatar = avatar;

    await user.save();
    res.status(200).json({ success: true, user });
  } catch (error) {
    // console.log(error.message);
    res.status(501).json({ success: false, message: "Server Error" });
  }
}

export async function handleSkip(req, res) {
  try {
    // const { avatar } = req.body;
    // // console.log("avatar: ", avatar);
    const user = await User.findById(req.user._id);

    user.avatarSelectionRequired = false;
    // // console.log("user.avatar: ", user.avatar);
    // // console.log("user: ", user);
    await user.save();
    res.status(200).json({ success: true, user: user });
  } catch (error) {
    // console.log(error.message);
    res.status(501).json({ success: false, message: "Server Error" });
  }
}

export async function auth(req, res) {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ success: false, message: "Username is required" });
    }

    let user = await User.findOne({ username });

    if (!user) {
      user = new User({ username });
      await user.save();
    }

    const token = genTokenAndSendCookie(user._id, res);
    res.status(200).json({ success: true, user, token });
  } catch (error) {
    console.error("Error in auth function:", error);
    res.status(501).json({ success: false, message: "Server Error" });
  }
}

export async function logout(req, res) {
  try {
    res.clearCookie("jwt-eduexo");
    res
      .status(200)
      .json({ success: true, message: "User logged out successfully" });
  } catch (error) {
    // console.log(error);
    res.status(501).json({ success: false, message: error.message });
  }
}

// Check user is authenticated or not
export async function getAuth(req, res) {
  try {
    // console.log("req.user:", req.user);
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    // console.log(error.message);
    res.status(501).json({ success: false, message: error.message });
  }
}
