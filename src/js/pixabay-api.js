import axios from "axios";

const API_KEY = "49644584-3a2a1c6d1a84de76c23a0374c";

export async function getImagesByQuery(query, page) {
    return await axios("https://pixabay.com/api/?", {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 15,
            page: page,
        }
    })
}