import settings from "../../settings";
import { SyntheticEvent, useRef} from 'react'

const LoginMenu = () => {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        fetch(`${settings.api_url}api/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email.current?.value,
                password: password.current?.value,
            }),
        })
        .then((res) => res.json())
        .then((res) => {
            localStorage.setItem("token", res.token)
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-3">
                <input ref={email} name="email" type="text" placeholder="Username" className="w-96 my-2 text-black"/>
                <input ref={password} name="password" type="password" placeholder="Password" className="w-96 my-2 text-black" />
                <button className="w-20 bg-blue-500 p-2" >Login</button>
            </div>
        </form>
    )
}

export default LoginMenu