import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "rmstore-next" });

// Inngest Function to save user data to MongoDB
export const syncUserCreation = inngest.createFunction(
    { id: "sync-user-from-clerk" },
    { event: "clerk/user.created" },
    async ({ event }) => {
        try {
            await connectDB();
            const { id, first_name, last_name, email_addresses, image_url } = event.data;
            const userData = {
                _id: id,
                email: email_addresses[0]?.email_address || "",
                name: `${first_name} ${last_name}`,
                imageUrl: image_url
            };
            await User.create(userData);
        } catch (error) {
            console.error("Error in syncUserCreation:", error);
        }
    }
);

// Inngest Function to update user data in MongoDB
export const syncUserUpdation = inngest.createFunction(
    { id: "update-user-from-clerk" },
    { event: "clerk/user.updated" },
    async ({ event }) => {
        try {
            await connectDB();
            const { id, first_name, last_name, email_addresses, image_url } = event.data;
            const userData = {
                email: email_addresses[0]?.email_address || "",
                name: `${first_name} ${last_name}`,
                imageUrl: image_url
            };
            await User.findByIdAndUpdate(id, userData, { new: true });
        } catch (error) {
            console.error("Error in syncUserUpdation:", error);
        }
    }
);

// Inngest Function to delete a user from MongoDB
export const syncUserDeletion = inngest.createFunction(
    { id: "delete-user-with-clerk" },
    { event: "clerk/user.deleted" },
    async ({ event }) => {
        try {
            await connectDB();
            const { id } = event.data;
            await User.findByIdAndDelete(id);
        } catch (error) {
            console.error("Error in syncUserDeletion:", error);
        }
    }
);
