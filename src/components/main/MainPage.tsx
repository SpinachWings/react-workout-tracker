import '../../styles/main-page.css'
import {useEffect, useState} from "react";
import CalendarPanel from "../calendar/CalendarPanel.tsx";
import TemplatePanel from "../templates/TemplatePanel.tsx";
import ChartPanel from "../charts/ChartPanel.tsx";
import CalendarTemplatesChartSelectionItem from "../util/CalendarTemplatesChartsSelectorItem.tsx";
import {
    PreSaveTemplateSplitContext,
    PreSaveTemplateWorkoutContext,
    TemplateSplitContext,
    TemplateWorkoutContext
} from "../../context/context.ts";

function MainPage() {

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const [panel, setPanel] = useState("Calendar");
    const pageSelection = ["Templates", "Calendar", "Charts"];

    const [allTemplateWorkouts, setAllTemplateWorkouts] = useState([]);
    const [preSaveAllTemplateWorkouts, setPreSaveAllTemplateWorkouts] = useState([]);

    const [allTemplateSplits, setAllTemplateSplits] = useState([]);
    const [preSaveAllTemplateSplits, setPreSaveAllTemplateSplits] = useState([]);

    const select = (pageSelector: string) => {
        setPanel(pageSelector);
    }

    // get templates
    const getTemplateWorkouts = async (): Promise<any> => {
        let responseJson;
        try {
            const response = await fetch(baseUrl + '/template/workouts', {
                method: "get",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
            });
            responseJson = await response.json();
            return responseJson;
        } catch(err) {
            console.log(err);
        }
    }

    const getTemplateSplits = async (): Promise<any> => {
        let responseJson;
        try {
            const response = await fetch(baseUrl + '/template/splits', {
                method: "get",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
            });
            responseJson = await response.json();
            return responseJson;
        } catch(err) {
            console.log(err);
        }
    }

    // const save = async () => {
    //     if (allTemplateWorkouts !== preSaveAllTemplateWorkouts) {
    //         // save template workouts
    //     }
    //     // etc.
    // }

    useEffect(() => {
        getTemplateWorkouts().then((templateWorkoutsJson) => {
            setAllTemplateWorkouts(templateWorkoutsJson);
            setPreSaveAllTemplateWorkouts(templateWorkoutsJson);
        });

        getTemplateSplits().then((templateWorkoutsJson) => {
            setAllTemplateSplits(templateWorkoutsJson);
            setPreSaveAllTemplateSplits(templateWorkoutsJson);
        });
    }, []);

    return (
        <>
            <div id={"main-page-parent-component"} className={"black-bg-2"}>
                <div id={"calendar-templates-charts-container"} className={"black-bg-1"}>

                    <div id={"main-page-header"}>

                        <ul className={"main-page-mini-header-menu left"}>
                            <li className={"small-button-1 blue-bg-4 blue-bg-3-on-hover light-text"}>H</li>
                        </ul>

                        <ul id={"calendar-templates-charts-selector"}>
                            {pageSelection.map(pageSelector => {
                                return <CalendarTemplatesChartSelectionItem pageSelector={pageSelector} select={select} isSelected={panel === pageSelector} key={pageSelector}/>
                            })}
                        </ul>

                        <ul className={"main-page-mini-header-menu right"}>
                            <li className={"small-button-1 blue-bg-4 blue-bg-3-on-hover light-text"}>S</li>
                            <li className={"small-button-1 blue-bg-4 blue-bg-3-on-hover light-text"}>M</li>
                        </ul>

                    </div>

                    {
                        panel === "Calendar" ?
                            <CalendarPanel></CalendarPanel> :

                        panel === "Templates" ?
                            <TemplateWorkoutContext.Provider value={{allTemplateWorkouts, setAllTemplateWorkouts}}>
                                <PreSaveTemplateWorkoutContext.Provider value={{preSaveAllTemplateWorkouts}}>
                                    <TemplateSplitContext.Provider value={{allTemplateSplits, setAllTemplateSplits}}>
                                        <PreSaveTemplateSplitContext.Provider value={{preSaveAllTemplateSplits}}>

                                            <TemplatePanel></TemplatePanel>

                                        </PreSaveTemplateSplitContext.Provider>
                                    </TemplateSplitContext.Provider>
                                </PreSaveTemplateWorkoutContext.Provider>
                            </TemplateWorkoutContext.Provider> :

                        <ChartPanel></ChartPanel>
                    }

                </div>
            </div>
        </>
    );
}

export default MainPage;
