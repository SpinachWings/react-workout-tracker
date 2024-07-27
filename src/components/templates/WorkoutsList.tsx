import {useContext} from "react";
import {TemplateWorkoutContext, TemplateWorkout} from "../../context/context.ts";

function WorkoutsList(props: any) {

    const {allTemplateWorkouts} = useContext(TemplateWorkoutContext);

    return (
        <ul>
            {allTemplateWorkouts.map((workout: TemplateWorkout) => {
                return (
                    <li key={workout.description} onClick={() => props.setEditorItem("workout", workout.description)}>{workout.description}</li>
                );
            })}
        </ul>
    );
}

export default WorkoutsList;