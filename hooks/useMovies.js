import { useRef, useState } from 'react'
import results from '../src/mockData/results.json'
import noresults from  "../src/mockData/no-results.json"


export function useMovies(search) {
    const [newMovies, setNewMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const prevSearch = useRef(search)
    const movies = newMovies.Search;

    const getMovies = async () => {
        if(search === null) return
        if(prevSearch.current === search) return

        try{
            setLoading(true)
            prevSearch.current= search
            const res = await fetch(`https://www.omdbapi.com/?apikey=13c913a1&s=${search}`);
            const json = await res.json()
            setNewMovies(json)
        } catch(e){
            throw new Error("Error searching for movies")
        
        }
        finally{
            setLoading(false)
        }
    }

    return { movies , getMovies, loading}
    
}
