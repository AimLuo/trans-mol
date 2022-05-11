class KetcherContext {
  private ketcher
  setKetcher(ketcher) {
    console.log('88', 88)
    this.ketcher = ketcher
  }
  getKetcher() {
    return this.ketcher
  }
}

export const ketcherContext = new KetcherContext()
