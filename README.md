
### Installing the package

```sh
$ npm i get-srilanka-districts-cities
```

### Including the package
```
const {cityList, provinceList,getJsonofCityAndDistrict,getDistrictList} = require('get-srilanka-districts-cities')
```
If you do not want to use all of the functions you can include only one function here
### Examples

Getting the citylist for selected District
```
cityList('Western','Kalutara')
```

Getting the Provinces list
```
provinceList()
```

Getting the the JSON of District and Cities for a given Province
```
getJsonofCityAndDistrict('Western')
```

Getting the distrct list for selected Province
```
getDistrictList('Western')
```

