var countryService = function () {

    getMyCountry = function () {
        return "Serbia";
    }

    return {
        myCountry: getMyCountry()
    };
}

app.factory("CountryService", countryService);