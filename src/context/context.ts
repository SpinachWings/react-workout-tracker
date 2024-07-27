import {createContext} from "react";

export type TemplateWorkout = {
    description: string,
    id: number,
    exercises: {
        exerciseName: string,
        isIsometric: boolean,
        id: number
    }[][]
};

type TemplateWorkouts = TemplateWorkout[];

export const TemplateWorkoutContext = createContext<TemplateWorkouts | undefined>(undefined);
export const PreSaveTemplateWorkoutContext = createContext<TemplateWorkouts | undefined>(undefined);

export type TemplateSplit = {
    description: string,
    id: number,
    duration: number
    workoutLinks: {
        positionInSplit: number,
        workoutId: number,
        id: number
    }[]
};

type TemplateSplits = TemplateSplit[];

export const TemplateSplitContext = createContext<TemplateSplits | undefined>(undefined);
export const PreSaveTemplateSplitContext = createContext<TemplateSplits | undefined>(undefined);