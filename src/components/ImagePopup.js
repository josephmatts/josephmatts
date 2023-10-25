import React from "react";
import Modal from "react-modal";
import './ImagePopup.css'

const customStyles = {
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent", // Set the background to transparent
        border: "none", // Remove border
        outline: "none", // Remove outline
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black overlay
    },
};


Modal.setAppElement('#root');

const ImagePopup = ({ isOpen, onRequestClose, imageUrl }) => {

    const closeIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            onClick={onRequestClose}
            className="close-button"
        >
            <path
                fill="#ffffff"
                d="M1.5,0.5 L19.5,18.5 M19.5,0.5 L1.5,18.5"
            />
        </svg>
    );

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            {closeIcon}
            <img src={imageUrl} alt="Preview" />
            {/* <a style={closeStyle}>X</a> */}
        </Modal>
    );
};

export default ImagePopup;
