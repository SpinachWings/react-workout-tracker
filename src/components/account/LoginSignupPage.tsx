function LoginSignupPage() {

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const email = import.meta.env.VITE_USER_EMAIL; // will be dynamic eventually
    const password = import.meta.env.VITE_USER_PASSWORD; // will be dynamic eventually

    const login = async () => {
        let responseJson;
        try {
            const body = {
                email: email,
                password: password
            }
            const response = await fetch(baseUrl + '/user/login', {
                method: "post",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            responseJson = await response.json();
            console.log(responseJson.message);
        } catch(err) {
            console.log('bad request');
        }
    }

    return (
        <div>
            <button onClick={() => login()}>login</button>
        </div>
    );
}

export default LoginSignupPage