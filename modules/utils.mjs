export function generateUUID(){
    return Math.floor(Math.random()*1000)+Math.floor(Math.random()*1000);
}


export function valueChecker(value){
    return typeof value === 'undefined' || value == null || value=='';
}