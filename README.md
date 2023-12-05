# Ts.ED/Express/Typeorm template

## Installation

- Instal NVM (node version manager) https://github.com/nvm-sh/nvm#installing-and-updating

- Install Node version `nvm install v18.16.0`

- Use node version In app directory, run `nvm use`

- Install PNPM (node package manager) https://pnpm.io/pt/installation

- Install all libraries with `pnpm install`

- Run local server `pnpm start`

## Migrations

- To create new migration, run `pnpm typeorm migration:create ./src/infra/db/migrations/MyMigrationName`

- To run migrations, run `pnpm typeorm:migration:run`

## Branch/commits naming
All feature/fixes pull requests must be merged using "Squash and Commit" and using the conventional commits standard (https://www.conventionalcommits.org/en/v1.0.0/) in the PR title.

For feature branches, use `feat/my-awesome-feature`.
For fix branches, use `fix/my-bug-fix`.

For feature commit messages, use `feat: My awesome feature`.
For fix commit messages, use `fix: My bug fix`.
If branch has more than one commit, use the commit message standard for PR title.

## Releasing

To release a new version, create a new release branch that starts with `release/` (i.e `release/1.0.0`) from `develop` and create a pull request from this release branch to `master`.

Once the PR is created, Github action is going to run and:

- generate the changelog and update the PR with the release changelog
- create a Github draft release with the changelog

When release is ready to be released, merge the release PR using "Merge and Commit" and publish the Github release.
A new PR will be created to update `develop` branch with the last `master` changes. Use "Merge and Commit" to merge.