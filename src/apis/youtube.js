import axios from "axios";

const KEY = "AIzaSyCkw-67KXJLAyUzSxD-DUfROlHPxcOTU_o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
