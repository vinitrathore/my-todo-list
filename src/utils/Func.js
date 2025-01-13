export const updtlclstrg =(data,name)=>{
    let jsonifydata = JSON.stringify(data);
    localStorage.setItem(name,jsonifydata);
}