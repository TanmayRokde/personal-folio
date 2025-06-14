
const useFormatDate = (ISODate) => {
    return new Date(ISODate).toLocaleDateString("en-US", {
        month:'short',
        day:'numeric',
        year:'numeric'
    });
    
}

export default useFormatDate;