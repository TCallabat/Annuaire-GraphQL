/**
 * graphql\resolvers.js
 */

const Annuaire = require("../models/annuaire");

const resolvers = {
    Query: {
        AnnuaireSimpleSearch: async (_, args) => {
            let {
                searchQuery = {},
                search = null,
                page = 1,
                limit = 20
            } = args;

            if (search) {
                searchQuery = {
                    $or: [
                        { Identifiant_de_l_etablissement: { $regex: search, $options: "i" } },
                        { Code_postal: { $regex: search, $options: "i" } },
                        { Code_departement: { $regex: search, $options: "i" } },
                        { Type_etablissement: { $regex: search, $options: "i" } }
                    ]
                };
            }

            const data = await Annuaire.find(searchQuery).limit(limit).skip((page - 1) * limit).lean();
            const count = await Annuaire.countDocuments(searchQuery);

            return {
                data,
                count,
                totalPages: Math.ceil(count / limit),
                currentPage: page
            }
        },

        AnnuaireMultiSearch: async (_, args) => {
            let {
                searchQuery = {},
                identifiant_de_l_etablissement = null,
                code_postal = null,
                code_departement = null,
                type_etablissement = null,
                page = 1,
                limit = 20
            } = args;

            if (!identifiant_de_l_etablissement) { identifiant_de_l_etablissement = "" }
            if (!code_postal) { code_postal = "" }
            if (!code_departement) { code_departement = "" }
            if (!type_etablissement) { type_etablissement = "" }

            if (identifiant_de_l_etablissement || code_postal || code_departement || type_etablissement) {
                searchQuery = {
                    $and: [
                        { Identifiant_de_l_etablissement: { $regex: identifiant_de_l_etablissement, $options: "i" } },
                        { Code_postal: { $regex: code_postal, $options: "i" } },
                        { Code_departement: { $regex: code_departement, $options: "i" } },
                        { Type_etablissement: { $regex: type_etablissement, $options: "i" } }
                    ]
                };
            }

            const data = await Annuaire.find(searchQuery).limit(limit).skip((page - 1) * limit).lean();
            const count = await Annuaire.countDocuments(searchQuery);

            return {
                count,
                data,
                totalPages: Math.ceil(count / limit),
                currentPage: page
            }
        }
    }
};

module.exports = resolvers;