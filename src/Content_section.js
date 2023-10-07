

function ContentSection(props) {
    return (
        <div className="what-is-dc">
            <p className='what-is-title'>{props.title}</p>
            <p className="description">{props.desc}</p>
        </div>
    )
}

export default ContentSection