import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";

// Create Inngest client
export const inngest = new Inngest({ id: "rmstore-next" });

// Function to save user data to MongoDB
export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    {
        event: 'clerk/user.created'
    },
    async ({ event }) => {
            const { id, first_name, last_name, email_addresses, image_url } = event.data;

            const userData = {
                _id: id,
                email: email_addresses[0].email_address,
                name: first_name + " " + last_name,
                imageUrl: image_url
            };
            await connectDB
            await User.create(userData);
    }
)

// Function to update user data in MongoDB
export const syncUserUpdate = inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    {
        event: 'clerk/user.updated'
    },
    async ({ event }) => {
            const { id, first_name, last_name, email_addresses, image_url } = event.data;

            const userData = {
                _id: id,
                email: email_addresses[0].email_address,
                name: first_name + " " + last_name,
                imageUrl: image_url
            };
            await connectDB
            await User.findByIdAndUpdate(id, userData);
    }
)

// Function to delete user from MongoDB
export const syncUserDelection = inngest.createFunction(
    {
        id: 'delete-user-from-clerk'
    },
    {
        event: 'clerk/user.deleted'
    },
    async ({ event }) => {
            const { id } = event.data;
            await connectDB
            await User.findByIdAndDelete(id);
    }
)
