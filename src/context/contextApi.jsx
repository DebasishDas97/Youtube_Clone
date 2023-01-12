<<<<<<< HEAD
import { useState, useEffect, createContext, useContext } from "react";

const CovidContext = createContext()

export const CovidDataProvider = ({children}) => {
    const [covidData, setCovidData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [theme, setTheme] = useState("light")
    const [serverMessage, setServerMessage] = useState("")

    useEffect(() => {
        setLoading(true)
        fetch("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(data => {
            setCovidData(data?.Countries)
            data.Message === "Caching in progress" && setServerMessage("The server is busy right now🙇‍♂️, please try again🥺")
            setLoading(false)
        })
    }, [])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <CovidContext.Provider value={{covidData, loading, setLoading, setCovidData, setSearchQuery, searchQuery, toggleTheme, theme, serverMessage}}>
            {children}
        </CovidContext.Provider>
    )
}

export default function useGlobalContext() {
    return useContext(CovidContext)
=======
import { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext()

export const AppContext = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [selectCategory, setSelectCategory] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        fetchSelectedCategoryData(selectCategory)
    }, [selectCategory])

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`)
        .then(({contents}) => {
            setSearchResults(contents)
            setLoading(false)
        })
    }

    return (
        <Context.Provider value={{loading, setLoading, selectCategory, setSelectCategory, searchResults, setSearchResults, mobileMenu, setMobileMenu}}>
            {children}
        </Context.Provider>
    )

>>>>>>> 147ecca (initial commit)
}