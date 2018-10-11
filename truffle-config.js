module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    child: {
      host: "localhost",
      port: 9546,
      network_id: "432123"
    },
    root: {
      host: "localhost",
      port: 9547,
      network_id: "432124"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  }
};
