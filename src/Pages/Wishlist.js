import React, { useEffect } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { Link } from "react-router-dom";
import { addToWishlist } from "../features/product/productSlice";
import { GrClose } from "react-icons/gr";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };

  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);

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
          {wishlistState?.length === 0 && (
            <div className="text-center fs-3">No Data</div>
          )}
          {wishlistState &&
            wishlistState?.map((item, index) => {
              return (
                <div className="col-3 mx-2" key={index}>
                  <div className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                      <button className="border-0 bg-transparent">
                        <GrClose
                          onClick={() => removeFromWishlist(item?._id)}
                          className="fs-8"
                        />
                      </button>
                    </div>
                    <div className="product-image">
                      <img
                        src={
                          item?.images[0].url
                            ? item?.images[0].url
                            : "/images/watch.jpg"
                        }
                        className="img-fluid d-block mx-auto"
                        alt="watch"
                        width={200}
                      />
                    </div>
                    <div className="px-3 py-3">
                      <h5 className="title">{item?.title}</h5>
                      <p
                        className="description"
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      ></p>
                      <p className="price">$ {item?.price}</p>
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
