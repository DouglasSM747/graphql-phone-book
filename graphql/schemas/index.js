const mergeGraphQLSchemas = require('merge-graphql-schemas')
const path = require('path')

const arquives = path.join(__dirname, './') // agrupe graphql arquives

const {
    fileLoader,
    mergeTypes
} = mergeGraphQLSchemas

const loaderfiles = fileLoader(arquives)

const schemas = mergeTypes(loaderfiles)

module.exports = schemas;