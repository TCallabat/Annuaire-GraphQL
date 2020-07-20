const config = {
    importCsv: {
        fileName: "annuaire-education"
    },
    db: {
        host: "localhost",
        port: 27017,
        base: "education",
        collection: "annuaire"
    },
    app: {
        port: 8080
    }
};

module.exports = config;