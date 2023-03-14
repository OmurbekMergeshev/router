import { useNavigate } from "react-router-dom"
import { useAuth } from "../hook/useAuth"

const Createpost = () => {
  const {singnout} = useAuth()
  const navigate = useNavigate()

  return (
    <div>
       <h1>Create a past</h1>
       <button onClick={() => singnout(() => navigate('/', {replace: true}))}>Log Out</button>
    </div>
  )
}

export {Createpost}