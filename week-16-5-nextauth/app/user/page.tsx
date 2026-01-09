// import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth"

export default async function(){
    const session = await getServerSession();
    // const session = useSession(); //you cannot use it here  Error: React Context is unavailable in Server Components
    return <div>
        User Component
        {JSON.stringify(session )}
    </div>
}