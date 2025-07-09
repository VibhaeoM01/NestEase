import { apiRequest } from "./apiRequest";

export const singlePageLoader = async ({request, params}) => {
    try {
        console.log("Loading post with ID:", params.id);
        const res = await apiRequest("/posts/" + params.id);
        console.log("Post data received:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error in singlePageLoader:", error);
        throw error; // Let the error boundary handle it
    }
};

export const listPageLoader = async ({ request }) => {
    try {
        const query = request.url.split("?")[1];
        const res = await apiRequest(`/posts?${query}`);
        return res.data;
    } catch (error) {
        console.error("Error in listPageLoader:", error);
        throw error;
    }
};

export const profilePageLoader = async () => { 
    try {
        const postsResponse = await apiRequest(`/users/profilePosts`);
        const chatsResponse = await apiRequest(`/chats`);
        
        return {
            postsResponse: postsResponse.data,
            chatsResponse: chatsResponse.data
        };
    } catch (error) {
        console.error("Error in profilePageLoader:", error);
        throw error;
    }
};