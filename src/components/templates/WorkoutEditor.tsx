import {useContext} from "react";
import {TemplateWorkout, TemplateWorkoutContext} from "../../context/context.ts";
import Exercise from "./Exercise.tsx";

function WorkoutEditor(props: any) {

    const {allTemplateWorkouts} = useContext(TemplateWorkoutContext);

    const description = props.activeEditorItem;
    let WIndex: number;
    const editorItem = allTemplateWorkouts.find((workout: TemplateWorkout, index: number) => {
        if (workout.description === description) {
            WIndex = index;
            return true;
        }
    });

    // have another child component for each exercise / exercise group

    return (
        <div>
            <div>{editorItem.description}</div>
            {editorItem.exercises.map((exerciseGroup: any, EGIndex: number) => {
                return exerciseGroup.map((exercise: any, EIndex: number) => {
                    const name = exercise.exerciseName;
                    return (
                        <Exercise name={name} WIndex={WIndex} EGIndex={EGIndex} EIndex={EIndex}></Exercise>
                    );
                });
            })}
        </div>
    );
}

export default WorkoutEditor;