import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";
import { nanoid } from "nanoid";

export default function ImageGallery({ listImages, open }) {
  const key = nanoid();
  return (
    <ul className={css.wrapperList}>
      {listImages.map(elem => (
        <li key={key} className={css.list}>
          <ImageCard itemImage={elem} open={open} />
        </li>
      ))}
    </ul>
  );
}
