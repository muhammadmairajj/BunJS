import axios from "axios";

async function fetchUser(users:any) {
    const res = await axios.get("https://api.github.com/users" + users);
    return res?.data;
}

export default fetchUser;