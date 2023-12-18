import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToWishlist } from "../features/product/productSlice";

const ProductCart = (props) => {
  const { grid, data } = props;
  let location = useLocation();
  const dispatch = useDispatch();

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            } `}
          >
            <Link
              // to={`${
              //   location.pathname == "/"
              //     ? "/product/:id"
              //     : location.pathname == "/product/:id"
              //     ? "/product/:id"
              //     : ":id"
              // }`}
              className="product-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <button
                  className="border-0 bg-transparent"
                  onClick={(e) => {addToWish(item?._id)}}
                >
                  <img src="/images/wish.svg" alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item?.images[0].url}
                  className="img-fluid mx-auto"
                  alt="product_image"
                  width={160}
                />
                <img
                  src="/images/watch-01.jpg"
                  className="img-fluid mx-auto"
                  alt="product_image"
                  width={160}
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={Number(item?.totalrating)}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">$ {item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src="/images/prodcompare.svg" alt="compare" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src="/images/view.svg" alt="view" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src="/images/add-cart.svg" alt="addcart" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductCart;
