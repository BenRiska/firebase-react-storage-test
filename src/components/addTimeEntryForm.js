import React, {useState} from "react"
import firebase from "../firebase"



const AddTimeEntryForm = () => {
    const [title, setTitle] = useState("")
    const [time, setTime] = useState("")


    const onSubmit = (e) => {
        e.preventDefault()

        firebase.firestore().collection('times').add({
            title,
            timeInSeconds: parseInt(time)
        })
        .then(() => {
            setTitle("")
            setTime("")
        })

     }



    return <form onSubmit={onSubmit}>
        <h4>Add Time Entry</h4>
        <div>
            <label>Title</label>
            <input type="text" onChange={e => setTitle(e.target.value)}/>
        </div>
        <div>
            <label>Time</label>
            <input type="number" onChange={e => setTime(e.target.value)}/>
        </div>
        <button>Add Time Entry</button>
    </form>
}

export default AddTimeEntryForm;