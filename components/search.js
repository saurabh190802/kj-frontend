import styles from '@/styles/Search.module.css'
import SearchFilters from './search_filters'

export default function Search(){
    return (
        <div>
            <div className={styles.search_component}>
                <div>
                    <form action="">
                        <input type="text" placeholder='Search' />
                        <button type="submit">
                            <span class="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            <SearchFilters />
        </div>
    )
}