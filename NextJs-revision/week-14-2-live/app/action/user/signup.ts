"use server"
import client from "@/db";

export async function signup(username:string, password:string) {
    try {
        console.log("db started");
        await client.user.create({
            data: {
                username: username,
                password: password
            }
        })
        console.log("db created");
        return true;
    } catch(e){
        console.log(e);
        return false;
    }
}