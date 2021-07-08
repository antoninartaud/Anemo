import React, { useState, useEffect } from 'react';
import { getQuestions, postReponse } from '../../utils/network';
import Response from './Response';

const Questions = (props) => {

    const [questions, setQuestions] = useState([])
    const [responses, setResponses] = useState([])
    const [userId, setUserId] = useState("")
    const [errors, setErrors] = useState([])


    const onChangeResponse = (questionId, responseValue) => {

        const newFilterResponses = responses.filter((elem) => {
            return elem.questionId !== questionId

        })
        const newResponses = [...newFilterResponses, { responseValue, questionId, userId }]


        console.log(newResponses)

        setResponses(
            newResponses
        )



    }

    console.log("props", props)
    console.log("response set", responses)

    const postSend = async () => {
        try {
            if (responses.length === 10) {
                const listResponse = await postReponse(responses)
                console.log(listResponse)
                props.finishCq(true)
            } else {
                setErrors([  "    vous n'avez pas fini de repondre à toute les questions"])
            }

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
    console.log("errors", errors)


    if (errors.length === 0) {
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
    } else {
        return (

            <>
            <div className="row">
                <div className="offset-3 col-6 mx-auto">
                    {
                        errors.map(elem => {
                            return (
                                <div className="alert alert-danger" role="alert">
                                    {elem}
                                </div>
                            )
                        })
                    }
                </div> 
                
            </div>
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
               
           </>
        )
    }









}


export default Questions