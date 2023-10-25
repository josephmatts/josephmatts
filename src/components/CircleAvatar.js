import './CircleAvatar.css'; // Import your CSS file

function CircleAvatar({ imageUrl }) {
    return (
        <img
            src={imageUrl} // Provide the image source URL
            alt="User Avatar"
            className="avatar" // Apply the CSS class for the circular avatar
        />
    );
}

export default CircleAvatar;
