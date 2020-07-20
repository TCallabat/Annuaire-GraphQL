/**
 * models\annuaire.js
 */

/* Import node_modules */
const mongoose = require("mongoose");

/* Model */
const Schema = mongoose.Schema;

const annuaireSchema = new Schema(
    {
        Identifiant_de_l_etablissement: String,
        Nom_etablissement: String,
        Type_etablissement: String,
        Statut_public_prive: String,
        Adresse_1: String,
        Adresse_2: String,
        Adresse_3: String,
        Code_postal:  String,
        Code_commune: String,
        Nom_commune: String,
        Code_departement: String,
        Code_academie: String,
        Code_region: String,
        Ecole_maternelle: String,
        Ecole_elementaire: String,
        Voie_generale: String,
        Voie_technologique: String,
        Voie_professionnelle: String,
        Telephone: String,
        Fax: String,
        Web: String,
        Mail: String,
        Restauration: String,
        Hebergement: String,
        ULIS: String,
        Apprentissage: String,
        Segpa: String,
        Section_arts: String,
        Section_cinema: String,
        Section_theatre: String,
        Section_sport: String,
        Section_internationale: String,
        Section_europeenne: String,
        Lycee_Agricole: String,
        Lycee_militaire: String,
        Lycee_des_metiers: String,
        Post_BAC: String,
        Appartenance_Education_Prioritaire: String,
        GRETA: String,
        SIREN_SIRET: String,
        Nombre_d_eleves: String,
        Fiche_onisep: String,
        position: String,
        Type_contrat_prive: String,
        Libelle_departement: String,
        Libelle_academie: String,
        Libelle_region: String,
        coordonnee_X: String,
        coordonnee_Y: String,
        epsg: String,
        nom_circonscription: String,
        latitude: String,
        longitude: String,
        precision_localisation: String,
        date_ouverture: String,
        date_maj_ligne: String,
        etat: String,
        ministere_tutelle: String,
        etablissement_multi_lignes: String,
        rpi_concentre: String,
        rpi_disperse: String,
        code_nature: String,
        libelle_nature: String,
        Code_type_contrat_prive: String,
        PIAL: String,
        etablissement_mere: String,
        type_rattachement_etablissement_mere: String
    }
);

/* Export */
module.exports = mongoose.model("Annuaire", annuaireSchema, "annuaire");
