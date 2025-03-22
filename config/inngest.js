// import { Inngest } from "inngest";
// import connectDB from "./db";
// import User from "@/models/User";

// // Create Inngest client
// export const inngest = new Inngest({ id: "rmstore-next" });

// // Function to save user data to MongoDB
// export const syncUserCreation = inngest.createFunction(
//     "sync-user-from-clerk",
//     "clerk/user.created",
//     async ({ event }) => {
//         try {
//             await connectDB();
//             const { id, first_name, last_name, email_addresses, image_url } = event.data;

//             const userData = {
//                 _id: id,
//                 email: email_addresses?.[0]?.email_address || "",
//                 name: `${first_name} ${last_name}`,
//                 imageUrl: image_url
//             };

//             await User.create(userData);
//         } catch (error) {
//             console.error("Error in syncUserCreation:", error);
//         }
//     }
// );

// // Function to update user data in MongoDB
// export const syncUserUpdation = inngest.createFunction(
//     "update-user-from-clerk",
//     "clerk/user.updated",
//     async ({ event }) => {
//         try {
//             await connectDB();
//             const { id, first_name, last_name, email_addresses, image_url } = event.data;

//             const userData = {
//                 email: email_addresses?.[0]?.email_address || "",
//                 name: `${first_name} ${last_name}`,
//                 imageUrl: image_url
//             };

//             await User.findByIdAndUpdate(id, userData, { new: true });
//         } catch (error) {
//             console.error("Error in syncUserUpdation:", error);
//         }
//     }
// );

// // Function to delete user from MongoDB
// export const syncUserDeletion = inngest.createFunction(
//     "delete-user-with-clerk",
//     "clerk/user.deleted",
//     async ({ event }) => {
//         try {
//             await connectDB();
//             const { id } = event.data;
//             await User.findByIdAndDelete(id);
//         } catch (error) {
//             console.error("Error in syncUserDeletion:", error);
//         }
//     }
// );
