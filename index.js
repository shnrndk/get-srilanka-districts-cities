const cities = require('./Data/cities')
const provinces = require('./Data/provinces')

module.exports.cityList = (province,district) =>cities.map((i)=>{
    return(i[province][district])
})

module.exports.getJsonofCityAndDistrict = (province,district) =>cities.map((i)=>{
    return(JSON.stringify(i[province]))
})

module.exports.provinceList = () =>provinces.map((i)=>{
    return i
})

module.exports.getDistrictList = (province) => cities.map((i)=>{
    return (Object.keys(i[province]))
})

