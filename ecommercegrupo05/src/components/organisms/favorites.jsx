import React, { useEffect, useState } from "react";
import FavCard from "../molecules/favcard.jsx";
import style from "../../styles/favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFavorite } from "../../redux/actions";

export default function Favorites() {
  const dispatch = useDispatch();
  const userL = useSelector((state) => state.userLoged);
  const UserFavorite = useSelector((state) => state.UserFavs);
  const [itemToDelete, setItemToDelete] = useState("");
  const numberOfFavorites = UserFavorite.length && UserFavorite[0].Products?.length;

  useEffect(() => {
    Object.keys(userL).length > 0 && dispatch(getUsersFavorite(userL.id));
  }, [itemToDelete]);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2 className={style.title}>Favoritos</h2>
        {
          <div className={style.cardgrid}>
            {numberOfFavorites ? (
              UserFavorite[0].Products?.map(({ image, name, id, price }) => (
                <FavCard
                  setItemToDelete={setItemToDelete}
                  img={image}
                  name={name}
                  id={id}
                  price={price}
                />
              ))
            ) : (
              <p>Favoritos Vacio</p>
            )}
          </div>
        }
      </div>
    </div>
  );
}
