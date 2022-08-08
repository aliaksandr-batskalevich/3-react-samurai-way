export const getTime = () => {
    let timeArr = new Date().toLocaleTimeString().split(':');
    timeArr.length = 2;
    return timeArr.join(':');
}

export const getDate = () => {
    return new Date().toLocaleDateString();
}