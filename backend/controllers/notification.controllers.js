import Notification from "../models/notification.model.js";
import User from "../models/user.model.js";

export const getNotifications = async (req, res)=>{
    try {
        const userId = req.user._id;

        const notifications = await Notification.find({to: userId})
            .populate({
                path: "from",
                select: "username profileImg",
            });

            await Notification.updateMany({to: userId}, {read: true});

            res.status(200).json(notifications);

    } catch (error) {
        res.status(500).json({error: "Internal server Error"});
        console.log("Error in getNotifications function", error.message);
    }
};

export const deleteNotifications = async (req, res)=>{
    try {
        const userId = req.user._id;

        await Notification.deleteMany({to: userId});

        res.status(200).json({message: "Notifications deleted successfully"});
    } catch (error) {
        res.status(500).json({error: "Internal server Error"});
        console.log("Error in deleteNotifications function", error.message);
    }
};

export const deleteOneNotification = async (req, res) => {
    try {
      const notificationId = req.params.id; // Extract notificationId from req.params
      const userId = req.user._id;
  
      const notification = await Notification.findById(notificationId); // Use findById instead of findById
  
      if (!notification) {
        return res.status(404).json({ error: "Notification not found" });
      }
  
      if (userId.toString() !== notification.to.toString()) {
        return res.status(403).json({ error: "You are not allowed to delete this notification" });
      }
  
      await Notification.findByIdAndDelete(notificationId); // Use findByIdAndDelete instead of notification.findByIdAndDelete
  
      res.status(200).json({ message: "Notification deleted successfully" });
  
    } catch (error) {
      console.error("Error in deleteOneNotification function", error.message);
      res.status(500).json({ error: "Internal server Error" });
    }
  }