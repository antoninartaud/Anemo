import React, { useState, useEffect } from 'react'
import Questions from '../components/user/Questions'
import { useHistory } from 'react-router-dom'

export default function UserPage() {
    const [finishCq, setFinishCq] = useState(false)

    let history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem("token") || false
         if (!token) {
            history.push("/")
            return
        }
    }, [])

    if (finishCq === false) {
        return (
            <div>
                <Questions finishCq={setFinishCq} />
            </div>

        )
    } else {
        return ("thank you for your responses")
    }

}
