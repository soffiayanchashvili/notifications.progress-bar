import "./style.css"


function Notifications(props) {
    return(
        <div className={`notification ${props.class}`}>
            <div className="icon-wrapper">
                <img src={props.image} alt="successIcon" />
            </div>
            <div className="text-wrapper">
                <h4>{props.text}</h4>
                <p>Order Placed Successfully. You can check order delivery status.</p>
            </div>
        </div>
    )
}

export default Notifications;