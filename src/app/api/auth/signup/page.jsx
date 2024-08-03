"use client"
import React from "react";

const page = () => {
    const handleRegister= async (e)=>{
        e.preventDefault()
        const newUser ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        //console.log(newUser)
        const response = await fetch('http://localhost:3000/api/auth/signup/new-user',{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        }) 
        //console.log(response)
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} action="">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" className="p-4" name="name" placeholder="your name" required />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" className="p-4" placeholder="your email" name="email" required />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input type="password" className="p-4" placeholder="your name" name="password" required />
        </div>
        <input type="submit" value="submit" className="btn bg-black text-white p-4" />
      </form>
    </div>
  );
};

export default page;
