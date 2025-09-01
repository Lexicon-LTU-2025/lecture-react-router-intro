interface IImageProps {
  alt: string;
  src: string;
}

export const Image = ({ alt, src }: IImageProps) => {
  return (
    <figure>
      <img alt={alt} src={src} />
    </figure>
  );
};
