import {useState , useEffect} from "react";
import {useParams} from "react-router-dom";
import databases from "./appwriteConfig";
import {Query} from "appwrite";

function Wand() {
    const [data , setData] = useState()
    const {id} = useParams()
    useEffect(() => {
        const promise = databases.listDocuments('DB_ID', 'C_ID',  [
                Query.equal("id", [id])
            ]
        );

        promise.then(function (response) {
           console.log(response.documents[0].name); // Success
            // I have to change this for multiple documents
           setData(response.documents[0].text); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    })
    return (
        <div>
            <h3>{data}</h3>
        </div>
    )
}

export default Wand
