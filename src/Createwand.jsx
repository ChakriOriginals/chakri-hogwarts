import {useParams} from "react-router-dom";
import databases from "./appwriteConfig.jsx";
import {useState} from "react";
import { motion } from "framer-motion"

function Createwand(){
    const [data , setData] = useState()
    const [save , setSave] = useState(false)
    const {id} = useParams()
    const saveData = () => {
        const promise = databases.createDocument('DB_ID', 'C_ID',id, {
            "name": "wand",
            "id": id,
            "text": data
        });
        promise.then(function (response) {
            console.log(response); // Success
            setSave(true)
        }, function (error) {
            console.log(error); // Failure
        });
    }

    return(
        <div>
            <h3>Your Wand number : {id}</h3>
            <input type="text" value={data} onChange={e => setData(e.target.value)} placeholder="Enter your Wand text wizard"/>
            <button onClick={saveData}>Save</button>

                {
                    save ? <motion.h3 className="color" initial={{ opacity: 0 }} animate={{ scale:2, x: [null, 100, 0],opacity: 1 }} transition={{ duration: 2 }}>Wand saved</motion.h3> : null
                }

        </div>
    )
}

export default Createwand
