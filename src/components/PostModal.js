import React from 'react'
import Modal from 'react-modal'

import ExpandedPost from '../components/ExpandedPost'

Modal.setAppElement('#root');

const PostModal = props => {
    const { isOpen, closeModal, postID, refresh } = props

    const postDeleted = () => {
        closeModal()
        refresh()
    }

    const postEdited = () => {
        refresh()
    }

    return <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
            content: {
                padding: "2rem",
                maxWidth: "42rem",
                maxhHeight: "100%",
                margin: "auto"
            },
            overlay: {
                zIndex: 35,
                backgroundColor: "rgba(128, 128, 128, 0.7)"
            }
        }}
    >
        <div className="container">
            <ExpandedPost id={postID} postDeleted={postDeleted} postEdited={postEdited} />
        </div>
    </Modal>
}

export default PostModal