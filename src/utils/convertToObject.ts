import { IMovie } from "../interfaces/movie";

export function convertToObject(obj: any): IMovie {
  const mapping: Record<string, keyof IMovie> = {
    "#TITLE": "TITLE",
    "#YEAR": "YEAR",
    "#IMDB_ID": "IMDB_ID",
    "#RANK": "RANK",
    "#ACTORS": "ACTORS",
    "#IMG_POSTER": "IMG_POSTER"
  };

  const newObj: Partial<IMovie> = {};

  Object.entries(mapping).forEach(([inputKey, outputKey]) => {
    if (obj[inputKey] !== undefined) {
      newObj[outputKey] = obj[inputKey];
    }
  });

  return newObj as IMovie;
}
