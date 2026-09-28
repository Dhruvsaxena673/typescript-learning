const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo", response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Axios Error", error.message);
            if (error.response) {
                console.log(error.response.status);
            }
        }
    }
};
export {};
//# sourceMappingURL=fetchReq.js.map