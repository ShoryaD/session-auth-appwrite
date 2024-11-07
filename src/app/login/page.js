import React from 'react'
import { redirect } from 'next/navigation'
import auth from '@/auth'

export default async function page() {

    const user = await auth.getUser()

    if (user) {
        redirect('/')
    }

  return (
    <div>
        <form id='login-form' action={auth.createSession}>
            <h3>Login</h3>
            <h5>Enter your informattion for Login...</h5>
            <div>
                <label>Email:</label>
                <input type='email' name='email' placeholder='Enter your Email...' defaultValue="shorya@gmail.com"></input>
            </div>

            <div>
                <label>Password:</label>
                <input type='password' name='password' placeholder='Enter your Password...' defaultValue="12341234"></input>
            </div>

            <div>
                <input type='submit' value="Login"></input>
            </div>
        </form>
    </div>
  )
}