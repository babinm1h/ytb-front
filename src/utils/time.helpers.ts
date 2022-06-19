import moment from "moment"


export const getCreationTime = (timetamps: string) => {
    return moment(timetamps).startOf("second").fromNow()
}


export const getCreationDate = (time: string) => {
    return moment(time).format('DD MMMM YYYY')
}