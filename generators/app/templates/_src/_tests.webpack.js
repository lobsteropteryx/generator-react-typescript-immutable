var testsContext = require.context("./spec", true, /\.ts$/);
testsContext.keys().forEach(testsContext);