class HistoricalArray {
  constructor() {
    this.currentEra = 0;
    this.history = [new Map()];
    this.eraHistoryMap = new Map([[0, 0]]);
  }

  set(index, value) {
    const historyIndex = this.eraHistoryMap.get(this.currentEra);
    this.history[historyIndex].set(index, value);
  }

  beginNewEra(eraId) {
    this.history.push(new Map());
    this.eraHistoryMap.set(eraId, this.history.length - 1);
    this.currentEra = eraId;
  }

  get(index, eraId) {
    let historyIndex = this.eraHistoryMap.get(eraId);
    while (historyIndex >= 0) {
      if (this.history[historyIndex].has(index)) {
        return this.history[historyIndex].get(index);
      }

      historyIndex--;
    }

    return 0;
  }
}

exports.HistoricalArray = HistoricalArray;
