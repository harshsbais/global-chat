import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import { Modal } from 'react-bootstrap'
function EmojiPicker() {
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };
    return (
        <div>
            <Modal
                show={true}
                aria-labelledby="contained-modal-title-vcenter"
                size="sm"
                centered>
                <Modal.Body>
                    <Picker onEmojiClick={onEmojiClick} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EmojiPicker
