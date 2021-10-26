let initialData = {
    category: 'league',
    datas: [
        "/bundesliga.webp",
        "/premierLeague.png",
        "/campeonato-brasileiro-serie-a_e4c38.jpg",
        "/eredivise.png",
        "/ligue1.webp",
        "/major-league-soccer_25c0a.jpg",
        "/seriaA.jpg",
        "/ufa.png"
    ]
}
const footballReducer = (state = initialData, action) => {

    if (action.type === 'Individual_Search') {

        return {
            category: action.data.category,
            datas: action.data.datas
        }

    } else if (action.type === 'NO_INDIVIDUAL_SEARCH') {
        return initialData
    } else {
        return state;
    }

}

export default footballReducer;