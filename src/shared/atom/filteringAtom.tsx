import { atom } from "jotai";

export type FilteringType = "ALL" | "TEAM" | "PERSONAL";

export const filteringAtom = atom<FilteringType>("ALL");
