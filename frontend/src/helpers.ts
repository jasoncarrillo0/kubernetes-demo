import axios, { AxiosResponse } from "axios";
import { BASE_URL, LARGE_LOAD, MEDIUM_LOAD } from "./constants";


type JavaServerResponse = {
    message: string
}

const log = console.log;

export async function initiateMediumLoad() {
    const url = BASE_URL + MEDIUM_LOAD;
    log("attempting url: ", url);
    const response = await axios.post<any, AxiosResponse<JavaServerResponse>>(url);
    log("response: ", response)
    return response.data.message;
}

export async function initiateLargeLoad() {
    const url = BASE_URL + LARGE_LOAD;
    const response = await axios.post<any, AxiosResponse<JavaServerResponse>>(url);
    log("response: ", response)
    return response.data.message;
}