var personService = function () {

    function person () {

        return "Igor Nenadov";
    }

    return {
        person: person()
    };
}

app.service("PersonService", personService);