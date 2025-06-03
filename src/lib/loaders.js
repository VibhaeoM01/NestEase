import apiRequest from "./apiRequest";

export const singlePageLoader = async ({request,params})=>{
    const res= await apiRequest("/posts/"+ params.id ) 
    // console.log(res.data);
    return res.data;
}
export const listPageLoader = async ({ request }) => {
    const query = request.url.split("?")[1];
    const res = await apiRequest(`/posts?${query}`); // Use `?` to construct the query string
    return res.data;
};
export const profilePageLoader = async () => { 
    const res = await apiRequest(`/users/profilePosts`); // Use `?` to construct the query string
    return res.data;
};