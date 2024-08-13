const LocationCard = (props) => {
    return(
        <>
            <img src={props.locationImage} />
            <p>{props.locationCaption}</p>
        </>
    )
}

export default LocationCard;