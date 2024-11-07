import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = async ({url, method}) => {
    const sessionCookie = await cookies().get('session')
    const headers = {
        Cookie: `session=${sessionCookie.value}`
    }
    return axios({
        url,
        method,
        headers
    })
}

export default axiosInstance