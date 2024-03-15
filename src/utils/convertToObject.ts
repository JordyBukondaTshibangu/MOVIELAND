interface IMovie {
  TITLE: string;
  YEAR: number;
  IMDB_ID: string;
  RANK: number;
  ACTORS: string;
  IMG_POSTER: string | undefined;
}

export function convertToObject(obj: IMovie): IMovie {
  const newObj: IMovie = {
    TITLE: '',
    YEAR: 0,
    IMDB_ID: '',
    RANK: 0,
    ACTORS: '',
    IMG_POSTER: undefined,
  };

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      switch (key) {
        case 'TITLE':
          newObj.TITLE = obj.TITLE;
          break;
        case 'YEAR':
          newObj.YEAR = obj.YEAR;
          break;
        case 'IMDB_ID':
          newObj.IMDB_ID = obj.IMDB_ID;
          break;
        case 'RANK':
          newObj.RANK = obj.RANK;
          break;
        case 'ACTORS':
          newObj.ACTORS = obj.ACTORS;
          break;
        case 'IMG_POSTER':
          newObj.IMG_POSTER = obj.IMG_POSTER;
          break;
        default:
          break;
      }
    }
  }

  return newObj;
}
