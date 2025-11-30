import React, { SetStateAction } from "react";

export type StateContext<T> = null | {
    state: T;
    setState: React.Dispatch<SetStateAction<T>>;
};