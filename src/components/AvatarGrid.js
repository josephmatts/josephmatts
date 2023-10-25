import CircleAvatar from './CircleAvatar'; // Import your Avatar component

function AvatarGrid({ data }) {

    var imageContext = require.context("../assets/collabs", false);
    var images = imageContext.keys().map(imageContext);
    return (
        <div className="avatar-grid">
            {images.map((img, index) => (
                <CircleAvatar imageUrl={img} key={index} />
            ))}
        </div>
    );
}

export default AvatarGrid
