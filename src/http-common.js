import axios from "axios";

const http = axios.create({
	baseURL: "https://api.github.com/",				// указание адреса сервера
	headers: {
		"Content-Type": "application/json",			// обмен данными будем осуществлять в формате json
	}
});

export default http;