🛠 Code Style & ESLint Rules
This project follows strict ESLint guidelines to ensure code quality, consistency, and readability.
Below are the conventions we follow:

Naming Conventions
  Classes & Components: PascalCase
    Example: UserProfile, ButtonPrimary
  Functions & Variables: camelCase
    Example: getUserData, userProfile
  Constants: UPPER_CASE_SNAKE
    Example: API_BASE_URL, MAX_LIMIT
  Files & Folders: kebab-case
    Example: user-profile.js, auth-service

General ESLint Rules
  2-space indentation (no tabs)
  Single quotes for strings (except to avoid escaping)
  Semi-colons required
  No unused variables (no-unused-vars)
  No console.log in production (no-console)
  Max line length: 100 characters (max-len)
  Require explicit return types in functions (@typescript-eslint/explicit-function-return-type)
  Consistent spacing & formatting (prettier/prettier)
