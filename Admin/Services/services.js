import axios from "axios";

export const PostList = async (data) => {
    const res = await axios.post('http://localhost:3001/employee/signUp', data)
    return res
}
