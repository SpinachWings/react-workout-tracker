import {useContext} from "react";
import {TemplateWorkoutContext} from "../../context/context.ts";

function Exercise(props: any) {

    const {allTemplateWorkouts, setAllTemplateWorkouts} = useContext(TemplateWorkoutContext);

    const updateExercise = (event: any) => {
        // do after short pause so you can type multiple chars without it triggering over and over

        const updatedTemplateWorkouts = allTemplateWorkouts;
        updatedTemplateWorkouts[props.WIndex].exercises[props.EGIndex][props.EIndex].exerciseName = event.target.value;
        updatedTemplateWorkouts[props.WIndex].exercises[props.EGIndex][props.EIndex].isIsometric = false;

        setAllTemplateWorkouts(updatedTemplateWorkouts);
    }

    return (
        <div>
            <input type="text" key={props.name} defaultValue={props.name} onChange={(event) => updateExercise(event)}/>
        </div>
    );
}

export default Exercise;