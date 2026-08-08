import {useContext} from "react";
import {TemplateWorkout, TemplateWorkoutContext} from "../../context/context.ts";
import AddNew from "./AddNew.tsx";

function WorkoutsList(props: any) {

    const {allTemplateWorkouts} = useContext(TemplateWorkoutContext);

    return (
        <>
            <ul>
                {!allTemplateWorkouts ? "" : allTemplateWorkouts.map((workout: TemplateWorkout) => {
                    return (
                        <li key={workout.description}
                            onClick={() => props.setEditorItem("workout", workout.description)}>{workout.description}</li>
                    );
                })}
            </ul>
            <AddNew/>
        </>
    );
}

export default WorkoutsList;