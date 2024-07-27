import {useContext} from "react";
import {TemplateSplit, TemplateSplitContext} from "../../context/context.ts";

function WorkoutEditor(props: any) {

    const {allTemplateSplits, setAllTemplateSplits} = useContext(TemplateSplitContext);

    const description = props.activeEditorItem;
    let editorItemIndex;
    const editorItem = allTemplateWorkouts.find((split: TemplateSplit, index: number) => {
        if (split.description === description) {
            editorItemIndex = index;
            return true;
        }
    });

    // have another child component for each exercise / exercise group

    return (
        <div>
            <div>{editorItem.description}</div>
        </div>
    );
}

export default WorkoutEditor;