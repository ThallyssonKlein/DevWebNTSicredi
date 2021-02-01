import React, { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async _ => {
    await signIn('credentials', { username, password });
    router.push("/list");
  }

  return (
    <div>
      <input type="text" value={username} onChange={e => setUserName(e.target.value)}/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      <button onClick={_ => login()}>SignIn</button>
    </div>
  )
}