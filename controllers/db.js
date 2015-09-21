var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/serverermesapp';

module.exports = {
    'url' : uristring
}