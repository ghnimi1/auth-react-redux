import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"

export default function PrivateRoute({ component: Component, ...rest }) {
    const signedIn = useSelector(state => state.signedIn.signedIn)
    return (
        <Route
            {...rest}
            render={props => {
                return signedIn ? <Component {...props} /> : <Redirect to="/login" />
            }}
        ></Route>
    )
}