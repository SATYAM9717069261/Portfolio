## 🛠 Code Style & ESLint Rules

This project follows **strict ESLint guidelines** to ensure **code quality, consistency, and readability**.

### 📌 Naming Conventions
- **Classes & Components:** `PascalCase`  
  _Example:_ `UserProfile`, `ButtonPrimary`
- **Functions & Variables:** `camelCase`  
  _Example:_ `getUserData`, `userProfile`
- **Constants:** `UPPER_CASE_SNAKE`  
  _Example:_ `API_BASE_URL`, `MAX_LIMIT`
- **Files & Folders:** `kebab-case`  
  _Example:_ `user-profile.js`, `auth-service`

### 📏 General ESLint Rules
- **Indentation:** 2 spaces (no tabs)  
- **Strings:** Single quotes (`'`) except to avoid escaping  
- **Semicolons:** Required  
- **Unused variables:** Not allowed (`no-unused-vars`)  
- **Console logs:** Not allowed in production (`no-console`)  
- **Max line length:** 100 characters (`max-len`)  
- **Explicit return types:** Required for functions (`@typescript-eslint/explicit-function-return-type`)  
- **Consistent formatting:** Enforced with Prettier (`prettier/prettier`)
