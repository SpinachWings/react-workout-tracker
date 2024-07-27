import '../../styles/templates.css'
import {useState} from "react";
import ExpandCollapseToggle from "./ExpandCollapseToggle.tsx";
import WorkoutsList from "./WorkoutsList.tsx";
import SplitsList from "./SplitsList.tsx";
import WorkoutEditor from "./WorkoutEditor.tsx";
import SplitEditor from "./SplitEditor.tsx";

function TemplatePanel() {

    const [workoutsVisible, setWorkoutsVisible] = useState(false);
    const [splitsVisible, setSplitsVisible] = useState(false);
    const [activeEditorItem, setActiveEditorItem] = useState({
        workoutOrSplit: "",
        description: "",
    });

    const toggleWorkouts = () => {
        setWorkoutsVisible(!workoutsVisible);
    }

    const toggleSplits = () => {
        setSplitsVisible(!splitsVisible);
    }

    const toggleActiveEditorItem = (workoutOrSplit: string, description: string) => {
        setActiveEditorItem({
            workoutOrSplit,
            description,
        });
    }

    return (
        <div id={"template-partition"}>
            <div className={"template-partitioned-panel black-bg-2 light-text"}>
                <ExpandCollapseToggle toggle={toggleWorkouts} value={"Workouts"} open={workoutsVisible}/>
                {workoutsVisible ? <WorkoutsList setEditorItem={toggleActiveEditorItem} /> : ''}
                <ExpandCollapseToggle toggle={toggleSplits} value={"Splits"} open={splitsVisible}/>
                {splitsVisible ? <SplitsList/> : ''}
            </div>
            <div className={"template-partitioned-panel black-bg-2 light-text"}>
                {
                    activeEditorItem.workoutOrSplit === "workout" ? <WorkoutEditor activeEditorItem={activeEditorItem.description} /> :
                        activeEditorItem.workoutOrSplit === "split" ? <SplitEditor activeEditorItem={activeEditorItem.description} /> :
                            ''
                }
            </div>
        </div>
    );
}

export default TemplatePanel