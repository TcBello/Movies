class RatingsEntity {
  private source: string;
  private value: string;

  constructor(source: string, value: string) {
    this.source = source;
    this.value = value;
  }

  static fromJSON(json: { Source: string; Value: string }): RatingsEntity {
    return new RatingsEntity(json.Source, json.Value);
  }
}

export default RatingsEntity;
