class HistoricalArray {
  constructor() {
    this.currentEra = 0;
    this.map = new Map([[0, {}]]);
  }

  set(index, value) {
    this.map.get(this.currentEra)[index] = value;
  }

  beginNewEra(eraId) {
    const currentState = this.map.get(this.currentEra);
    this.map.set(eraId, { ...currentState });
    this.currentEra = eraId;
  }

  get(index, eraId) {
    return this.map.get(eraId)[index] || 0;
  }
}

exports.HistoricalArray = HistoricalArray;
