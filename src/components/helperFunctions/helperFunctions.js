import { get } from "lodash";

export const getViewportXY = () => {
    let e = window, a = "inner";
    if(!("innerHeight" in window)){
        a = "client";
        e = document.documentElement || document.body;
    }
    return [e[a+"Width"], e[a+"Height"]];
}