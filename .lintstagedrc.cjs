const path = require('path');

module.exports = {
	'*.{js,ts}': ['pnpm eslint', 'pnpm prettier'],
	'*.{json,scss,html,md}': 'pnpm prettier',
	'*.scss': 'pnpm stylelint',
};
