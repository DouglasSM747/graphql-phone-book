const path = require('path')
const mergeGraphQLSchemas = require('merge-graphql-schemas')

const {
    fileLoader
} = mergeGraphQLSchemas

const arquives = path.join(__dirname, './')
const loaderfiles = fileLoader(arquives)

module.exports = loaderfiles