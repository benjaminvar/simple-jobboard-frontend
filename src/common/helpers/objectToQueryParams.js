export function objectToQueryParams(params) {
    let keys = Object.keys(params);
    let str = "";
    keys.forEach((key, index) => {
        //Add amperstand if there are more than 1 param converted
        if (index > 0) {
            str += "&";
        }
        str += `${key}=${encodeURIComponent(params[key])}`;
    });
    //Add the query character if there are str params converted
    if (str.length > 0) {
        str = "?" + str;
    }
    return str;
}