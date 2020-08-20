import React, {useState, useEffect} from "react"
import firebase from "../firebase"

const SORT_OPTIONS = {
    "TIME_ASC": {column: "timeInSeconds", direction: "asc"},
    "TIME_DESC": {column: "timeInSeconds", direction: "desc"},
    "TITLE_ASC": {column: "title", direction: "asc"},
    "TITLE_DESC": {column: "title", direction: "desc"}
}


const useTimes = (sortBy = "TIME_ASC") => {
    const [times, setTimes] = useState([])

    useEffect(() => {
        const unSub = firebase.firestore().collection('times').orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction).onSnapshot((snap) => {
            const newTimes = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            setTimes(newTimes);
        })

        return () => unSub()
    }, [sortBy])

    return times
}

const TimesList = () => {

    const [sortBy, setSortBy] = useState("TIME_ASC")
    const times = useTimes(sortBy )


    return <div>
        <h2>Times List</h2>
        <label>Sort by:</label>
        <select onChange={e => setSortBy(e.target.value)}>
            <option value="TIME_ASC">Time (fastest first)</option>
            <option value="TIME_DESC">Time (slowest first)</option>
            <option disabled>------- </option>
            <option value="TITLE_ASC">Order (A-Z)</option>
            <option value="TITLE_DESC">Order (Z-A)</option>
        </select>
        <ol>
            {times.map(time => <li key={time.id}>
            <div>{time.title}{"            "}
            <code>{time.timeInSeconds} Seconds</code>
                </div>
            </li>)}
        </ol>
    </div>
}

export default TimesList;