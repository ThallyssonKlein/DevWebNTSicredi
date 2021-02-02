import React, { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client';

import styles from './signin.module.css';

function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async _ => {
    await signIn('credentials', { username, password });
    router.push("/list");
  }

  return (
    <html>
      <head>
          <title>Login — Gerenciador de Dragões</title>
      </head>
      <body className={styles.container}>
        <div className={styles.center}>
            <h2 className={styles.h2}>GERENCIADOR DE DRAGÕES</h2>
            <input type="text"
                   value={username}
                   onChange={e => setUserName(e.target.value)}
                   placeholder="username"
                   className={styles.input}/>
            <input type="password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   placeholder="password"
                   className={styles.input}/>
            <button className={styles.button}
                    onClick={_ => login()}>ENTRAR</button>
        </div>
      </body>
    </html>
  )
}

SignIn.getInitialProps = async ctx => {
  console.log(ctx);
  const session = await getSession(ctx);
  if(session){
      ctx.res.writeHead(302, { Location: "/list" }).end()
      return {}
  }
  return {}
}

export default SignIn;