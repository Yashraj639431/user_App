import React, { useEffect } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/product/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };

  const wishlistState = useSelector((state) => state.auth.wishlist);
  // const wishlistState = useSelector((state) => state.auth.wishlist.wishlist);
  // console.log(wishlistState);

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };
  return (
    <>
      <Meta title={"Wishlist"}></Meta>
      <BreadCrum title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {!wishlistState && <div className="text-center fs-3">No Data</div>}
          {/* {wishlistState.length === 0 && <div className="text-center">No Data</div>} */}
          {wishlistState?.map((index, item) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    onClick={() => removeFromWishlist(item?._id)}
                    src="/images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="wishlist-card-image bg-white">
                    <img
                      src={
                        item?.images[0].url
                          ? item?.images[0].url
                          : "/images/watch.jpg"
                      }
                      className="img-fluid d-block mx-auto"
                      alt="watch"
                      width={160}
                    />
                  </div>
                  <div className="px-3 py-3">
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price">$ {item?.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
