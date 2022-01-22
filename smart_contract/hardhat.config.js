require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.9',
	paths: {
		sources: './contracts',
		artifacts: './artifacts',
	},
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/NieQW9c2jNaSIGDalZR3tXjvUoaLOf4Y',
			accounts: ['c073e715f53d4be7121f74cdcc96d9f7b4265c2c755d9418e715e371c1b0859b'],
		},
	},
};
