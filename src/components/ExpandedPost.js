import React, { useState, useEffect, useCallback, useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Linkify from 'react-linkify'

import UserContext from '../UserContext'

const ExpandedPost = props => {
    const maxCharacters = 512

    const [userData] = useContext(UserContext)
    const [postData, setPostData] = useState(null)
    const [, setCommentsData] = useState(null)

    const [isEditMode, setIsEditMode] = useState(false)
    const [editInput, setEditInput] = useState("")
    const [characterCounter, setCharacterCounter] = useState(maxCharacters)

    const postID = props.id

    const refreshPost = useCallback(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/post`,
            { params: { ID: postID } })
            .then(res => {
                setPostData(res.data.post)
                setCommentsData(res.data.comments)
            })
            .catch(err => {
                if (err && err.response && err.response.data && err.response.data.error)
                    toast.error(err.response.data.error)
                else
                    toast.error("Sorry, an error occured")
            })
    }, [postID])

    const handleInput = e => {
        let text = e.target.value

        if (text.length > maxCharacters)
            text = text.substr(0, maxCharacters)

        setCharacterCounter(maxCharacters - text.length)
        setEditInput(text)
    }

    const startEdit = () => {
        const text = postData && postData.post ? postData.post : ""
        setEditInput(text)
        setIsEditMode(true)
        setCharacterCounter(maxCharacters - text.length)
    }

    const cancelEdit = () => {
        setEditInput("")
        setIsEditMode(false)
        setCharacterCounter(maxCharacters)
    }

    const saveEdit = () => {
        axios.patch(`${process.env.REACT_APP_API_URL}/api/post`,
            { ID: postID, Post: editInput }, { headers: { Authorization: userData.token } })
            .then(() => {
                refreshPost()
                cancelEdit()
            })
            .catch(err => {
                if (err && err.response && err.response.data && err.response.data.error)
                    toast.error(err.response.data.error)
                else
                    toast.error("Sorry, an error occured")
            })
    }

    useEffect(() => {
        if (postID) {
            refreshPost()
        } else {
            setPostData(null)
            setCommentsData(null)
        }
    }, [postID, refreshPost])

    return <>
        {postData &&
            <div className="card" style={{ margin: "1rem auto" }}>
                <div className="card-content" style={{ whiteSpace: "pre-wrap" }}>
                    {isEditMode ?
                        <>
                            <div className="LinkButton-Danger" style={{ position: "absolute", top: "0.25rem", right: "0.25rem", fontSize: "0.7rem" }}>Delete</div>
                            <textarea onChange={handleInput} value={editInput} className="textarea" />
                            <div style={{ float: "right", color: "lightgray" }} >Remaining characters: {characterCounter}</div>
                        </>
                        :
                        <Linkify>{postData.post}</Linkify>
                    }
                </div>
                <div className="card-footer" style={{ justifyContent: "space-between", fontSize: "0.7rem", color: "gray", padding: "1rem" }}>
                    <div>
                        {`${postData.username}, ${postData.date}`}
                    </div>
                    <div>
                        {(userData.userID === postData.userID || userData.access === "Admin") &&
                            <>
                                {isEditMode ?
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div className="LinkButton" onClick={cancelEdit}>Cancel</div>
                                        <div style={{ width: "0.5rem" }}></div>
                                        <div className="LinkButton" onClick={saveEdit} style={{ fontWeight: 700 }}>Save</div>
                                    </div>
                                    :
                                    <div className="LinkButton" onClick={startEdit}>Edit</div>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        }
    </>
}

export default ExpandedPost