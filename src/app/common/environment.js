
class Environment {
    constructor(name, repositoryUrl) {
        this.name = name;
        this.reposirotyUrl = repositoryUrl;
    }
}

Environment.DEV = new Environment('dev', 'http://repository-staging.herokuapp.com/api');
Environment.PROD = new Environment('prod', 'http://repository-prod.herokuapp.com/api');

const currentEnvironment = (process.env.ENVIRONMENT === 'prod') ?
    Environment.PROD : Environment.DEV;

console.log(currentEnvironment);

exports.current = currentEnvironment;