import { User } from "../models/modelUser.js";

// Get user's favorites
export async function getUserFavourites(req, res) {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate("favorites");
    if (!user) {
      return res.status(401).json({ success: false, message: "User not logged in" });
    }

    res.status(200).json({ success: true, favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function addFavourite(req, res) {
  try {
      const userId = req.user.id;
      if (!userId) {
          return res.status(401).json({ success: false, message: "User not logged in" });
      }
      
      const { planetName } = req.body;
      console.log("planetName: ", planetName);

      const user = await User.findById(userId);
      if (!user) {
          return res.status(401).json({ success: false, message: "User not logged in" });
      }

      if (!user.favorites.includes(planetName)) {
          user.favorites.push(planetName);
          await user.save();
          console.log("user.favorites: ", user.favorites);
          return res.status(200).json({ success: true, message: "Added to favorites" });
      } else {
          return res.status(400).json({ success: false, message: "Already in favorites" });
      }
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}
// Delete a favourite
export async function deleteFavourite(req, res) {
  try {
    const userId = req.user.id;
    const { planetName } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ success: false, message: "User not logged in" });
    }

    user.favorites = user.favorites.filter(fav => fav !== planetName);

    await user.save();
    res.status(200).json({ success: true, message: "Removed from favorites" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}