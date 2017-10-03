var countryService = function () {

    getMyCountry = function () {
        return "Serbia";
    }

    return {
        myCountry: getMyCountry()
    };
}

app.service("CountryService", countryService);