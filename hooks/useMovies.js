import { useRef, useState, useMemo } from 'react'
import results from '../src/mockData/results.json'
import noresults from  "../src/mockData/no-results.json"
import { useSearch } from './useSearch';


export function useMovies({search, page}) {
    const api_key = '13c913a1';
    const [newMovies, setNewMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const prevSearch = useRef(search)  
    const prevPage = useRef(page)

    const getMovies =  async ({search, page}) => {
        if(search === null) return
        if(prevSearch.current === search && prevPage.current === page ) return
        try{
            setLoading(true)
            prevSearch.current= search
            prevPage.current= page
            const res = await fetch(`https://www.omdbapi.com/?apikey=${api_key}&s=${search}&page=${page}`);
            const json = await res.json()
            setNewMovies(json)
        } catch(e){
            throw new Error("Error searching for movies")
        }
        finally{
            setLoading(false)
        }
    }

    return { movies: newMovies.Search , getMovies, loading}
    
}
