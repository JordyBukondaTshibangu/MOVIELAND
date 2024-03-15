
type MovieData = {
    [key: string]: string | number;
  };
  
  export function convertToObject(obj: MovieData): MovieData {
    const newObj: Partial<MovieData> = {};
    for (const key in obj) {
      const newKey = key.replace("#", "");
      newObj[newKey] = obj[key];
    }
    return newObj as MovieData;
  }