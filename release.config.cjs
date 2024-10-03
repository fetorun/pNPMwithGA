/**
 * @link https://semantic-release.gitbook.io/semantic-release/usage/configuration
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: ["master", { "name": "next", "prerelease": true }],
};