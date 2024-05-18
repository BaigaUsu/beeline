import React from "react";

interface VideoProps {
  width: string;
  height: string;
  src: string;
  title: string;
}

const Video: React.FC<VideoProps> = ({ width, height, src, title }) => {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
