import React, { useState, useEffect } from 'react';
import { getQuestions, postReponse } from '../../utils/network';
import Response from './Response';

const Questions = () => {

    const [questions, setQuestions] = useState([])
    const [responses, setResponses] = useState([])
    const [userId, setUserId] = useState("")


    const onChangeResponse = (questionId, responseValue) => {

        const newFilterResponses = responses.filter((elem)=>{
            return elem.questionId !== questionId

        })
        const newResponses = [...newFilterResponses, { responseValue, questionId, userId }]


        console.log(newResponses)
        
        setResponses(
            newResponses
        )
        const validation = newResponses.findIndex(elem => {
           return elem.questionId

        })
        console.log("validation",validation)

    }

    console.log("response set", responses)

    const postSend = async () => {
        try {
            const listResponse = await postReponse(responses)
            console.log(listResponse)
        } catch (error) {
            console.error(error)

        }

    }

    useEffect(async () => {
        try {
            const responseData = await getQuestions()
            console.log("response", responseData)


            if (responseData) {
                setQuestions(responseData.questionList)
                setUserId(responseData.userId)

            } else {
                alert("There was a problem")
            }
        } catch (error) {
            alert("There was a problem")
        }
    }, []);

    console.log("question", questions)
    return (

        <div>
            <ul>
                {questions.map((elem) => {
                    return (
                        <div>
                            <li>{elem.questionText}</li>
                            <Response questionsId={elem._id} onChange={onChangeResponse} />
                        </div>

                    )
                })}
            </ul>
            <button onClick={postSend}>save</button>


        </div>
    )







}


export default Questions