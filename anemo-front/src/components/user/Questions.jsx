import React, { useState, useEffect } from 'react';
import { getQuestionList, getQuestions, postReponse } from '../../utils/network';
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
                setErrors(["    vous n'avez pas fini de repondre à toute les questions"])
            }

        } catch (error) {
            console.error(error)

        }

    }

    useEffect(async () => {
        try {
            const responseData = await getQuestionList()
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
                <h1 style={{ textAlign: 'center', marginTop: '5px', fontFamily: 'fantasy' }}> CQ TEST</h1>
                <div >
                    <ul>
                        <div style={{ listStyle: 'none', textAlign: "center", marginTop: '10px' }}>
                            {questions.map((elem) => {
                                return (

                                    <div className="card-title">
                                        <li>{elem.questionText}</li>
                                        <Response questionsId={elem._id} onChange={onChangeResponse} />
                                    </div>

                                )
                            })}
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button style={{ paddingLeft: '40px', paddingRight: '40px' }} class="btn btn-primary btn-lg" onClick={postSend}>save</button>
                        </div>
                    </ul>
                </div>

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



                <h1 style={{ textAlign: 'center', marginTop: '5px', fontFamily: 'fantasy' }}> CQ TEST</h1>
                <ul>
                    <div style={{ listStyle: 'none', textAlign: "center", marginTop: '10px' }} >
                        {questions.map((elem) => {
                            return (
                                <div style={{
                                    listStyle: 'none', textAlign: "center", marginTop: '10px',
                                }}>
                                    <li>{elem.questionText}</li>
                                    <Response questionsId={elem._id} onChange={onChangeResponse} />
                                </div>
                            )
                        })}
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button style={{ paddingLeft: '40px', paddingRight: '40px' }} class="btn btn-primary btn-lg" onClick={postSend}>save</button>
                        </div>
                    </div>
                </ul>


                )

            </>
        )
    }









}


export default Questions