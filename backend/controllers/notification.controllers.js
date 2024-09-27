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

export const deleteOneNotification = async (req, res)=>{
    try {
        const notificationId = req.params;
        const userId = req.user._id;
              
        const notification = await Notification.findById({notificationId});
        if(userId.toString() !== notification.to.toString()){
            return res.status(403).json({error: "You are not allowd to delete this notification"});
        }

        await notification.findByIdAndDelete(notificationId);

        res.status(200).json({message: "Notification deleted successfully"});

    } catch (error) {
        res.status(500).json({error: "Internal server Error"});
        console.log("Error in deleteOneNotification function", error.message);
    }
}