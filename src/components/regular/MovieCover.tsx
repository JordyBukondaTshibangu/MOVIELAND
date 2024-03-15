import React from "react";

type MovieCoverProps = {
  cover: string;
  name: string;
};

const MovieCover: React.FC<MovieCoverProps> = ({ cover, name }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <img src={cover} alt={name} className="w-full h-full object-cover" />
    </div>
  );
};

export default MovieCover;
