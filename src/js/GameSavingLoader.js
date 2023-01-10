import read from './parser';
import json from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      const data = await json(buffer);
      return data;
    } catch (error) {
      return error;
    }
  }
}
