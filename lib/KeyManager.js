const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.Conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.Conf.set("apiKey", key);
    return key;
  }
}
