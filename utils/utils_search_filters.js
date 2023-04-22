export const searchTypes = {
    search_by:[
        'General Search',
        'Title and Date',
        'Gurbani First Letters',
        'Gurbani First Letters Anywhere',
        'Search By Location'
    ],
    sort_by:[
        "Relevance",
        "Date (Decreasing)",
        "Date (Increasing)"
    ]
}


export function getDefaultSearchFilters(){
    return {
        search_by:searchTypes['search_by'][0],
        sort_by:searchTypes['sort_by'][0]
    }
}