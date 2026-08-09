semver-install:
	npm --no-package-lock install

bump: semver-install
	npm run bump
