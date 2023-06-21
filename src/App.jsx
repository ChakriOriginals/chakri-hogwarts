
import './App.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Route , Routes} from "react-router-dom";
import Wand from "./Wand";
import Createwand from "./Createwand";

function App() {
    const navigate = useNavigate()

    const [id , setId] = useState("")
    const createWand = () => {
        const idc = Math.random().toString(36).substring(7);
        console.log(idc)
        navigate("/create/" + idc)
    }

    const useWand = () => {
        navigate("/wand/" + id)
    }

  return (
    <div>
       <h3>Welcome to the magic web</h3>

        <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="Enter your Wand Id wizard"/>
        <button onClick={useWand}>
            Use your wand
        </button>
        <br></br>
        <button onClick={createWand}>
            Create your wand
        </button>

        <Routes>
            <Route path="/wand/:id" element={<Wand/>}/>
            <Route path={"/create/:id"} element={<Createwand/>}/>
        </Routes>

    </div>
  )
}

export default App
