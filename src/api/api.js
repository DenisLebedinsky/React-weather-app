//запрос списка городов
export const findLocationApi = async stext => {
    return fetch(`/location/search/?query=${stext}`)
        .then(res => res.json())
        .then(data => data);
};

//запрос прогноза погоды по id
export const findWratherCurrentLocationAPI = async id => {
    return fetch(`/location/${id}/`)
        .then(res => res.json())
        .then(data => data);
};