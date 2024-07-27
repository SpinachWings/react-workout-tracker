import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

function ExpandCollapseToggle(props: any) {

    const toggleIcon = props.open ? faAngleDoubleUp : faAngleDoubleDown;
    const toggleStyle = props.open ? "expand-collapse-toggle blue-bg-4 blue-bg-5-on-hover" : "expand-collapse-toggle blue-bg-5-on-hover";

    return (
        <div onClick={() => props.toggle()} className={toggleStyle}>
            <div className={"expand-collapse-toggle-child"}>{props.value}</div>
            <FontAwesomeIcon icon={toggleIcon} className={"expand-collapse-toggle-child"}/>
        </div>
    );
}

export default ExpandCollapseToggle;