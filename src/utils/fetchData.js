export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6f006eb6cbmsh261f3925b95bddfp1b2cdbjsn9b8c5042274b',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};





export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};