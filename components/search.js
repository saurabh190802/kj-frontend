import styles from '@/styles/Search.module.css'
import SearchFilters from './search_filters'
import { useState } from 'react'
import {getDefaultSearchFilters} from '@/utils/utils_search_filters.js'

export default function Search(){
    const [currentFilter, setCurrentFilter] = useState(getDefaultSearchFilters())
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div className={styles.search_component}>
                <div>
                    <form action="">
                        <input type="text" placeholder='Search' />
                        <button type="submit">
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            <SearchFilters 
                currentFilter={currentFilter} 
                setCurrentFilter={setCurrentFilter}
            />
        </div>
    )
}