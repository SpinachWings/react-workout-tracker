import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useContext, useState} from "react";
import {
    createNewTemplateWorkoutWithName,
    TemplateWorkoutContext,
    templateWorkoutWithNameExists
} from "../../context/context.ts";

function AddNew() {

    const {allTemplateWorkouts, setAllTemplateWorkouts} = useContext(TemplateWorkoutContext);

    const [isCreating, setIsCreating] = useState(false);
    const [nameInput, setNameInput] = useState("");

    const toggleNameInput = () => {
        const nameInputIsActive = isCreating;
        setIsCreating(!nameInputIsActive);
    }

    const updateNameInput = (event: any) => {
        setNameInput(event.target.value);
    }

    const nameInputIsValid = () => {
        return !templateWorkoutWithNameExists(nameInput, allTemplateWorkouts) && nameInput.length > 0;
    }

    const generate = () => {
        if (nameInputIsValid()) {
            const newTemplateWorkout = createNewTemplateWorkoutWithName(nameInput);
            const updatedTemplateWorkouts = !!allTemplateWorkouts ? allTemplateWorkouts.push(newTemplateWorkout) : [newTemplateWorkout];
            setAllTemplateWorkouts(updatedTemplateWorkouts);
            setIsCreating(false);
        }
    }

    return (
        <>
            {!isCreating ?
                <div className={"add-new blue-bg-3-on-hover"} onClick={() => toggleNameInput()}>
                    <FontAwesomeIcon icon={faPlus} className={"add-icon"}/>
                    New
                </div>
                :
                <div>
                    <label>Name: </label>
                    <input type={"text"} value={nameInput} onChange={(event) => updateNameInput(event)}/>
                    <button onClick={() => generate()}>Generate</button>
                    <button>Cancel</button>
                </div>
            }
        </>
    )
}

export default AddNew;