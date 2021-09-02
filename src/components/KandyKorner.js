import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/Navbar"
import { ApplicationViews } from "./ApplicationViews"

export const KandyKorner = () => {
    return (
        <>
        <Route>
            <NavBar />
            <ApplicationViews />
        </Route>
        </>
    )
}

