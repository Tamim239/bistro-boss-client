import { useAuth } from "../../../Hook/useAuth"

export const UserHome = () => {
const {user} = useAuth()
    
  return (
    <div>
        <div>
        <h1 className="text-3xl">
          <span>Hi, Welcome</span>
          {user?.displayName ? user?.displayName : "Back"}
        </h1>
      </div>
    </div>
  )
}
