import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react"

export default async function (){
    const session = await getServerSession();
    return <div>
        Dashboard page
        {JSON.stringify(session)};
    </div>
}