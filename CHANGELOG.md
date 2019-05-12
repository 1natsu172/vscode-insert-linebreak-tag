# Change Log
All notable changes to the "insert-br-tag" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- ## [Unreleased] -->

## [1.0.0] - 2019-05-12
### Added

- Language-specific behavior
  - Restrict valid language files
  - Currently, only works in these languages(default setting)
    - "javascript",
    - "javascriptreact",
    - "typescript",
    - "typescriptreact",
    - "markdown",
    - "html"
- Insert the best form of br-tag
  - The type of language file determines the tag format to insert
- Offer option to `setting.json` with this change

### Changed

- Has stopped working with all language files
- Changed tag format from `<br>` to `<br />` if JSX is assumed