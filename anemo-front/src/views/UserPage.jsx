import React, { useState, useEffect } from 'react'
import Questions from '../components/user/Questions'
import { useHistory } from 'react-router-dom'

export default function UserPage() {
    let history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem("token") || false
        console.log("token", token)
        if (!token) {
            history.push("/")
            return
        }
    }, [])
    return (
        <div>
        <Questions/>
        </div>

    )
}
