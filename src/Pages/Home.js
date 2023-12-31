import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCart from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import ReactStars from "react-rating-stars-component";
import Container from "./Container";
import { services } from "../Utils/Data";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
import {
  addToWishlist,
  getAllProducts,
} from "../features/product/productSlice";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state.product.product);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs();
    getallProducts();
  }, []);

  const getBlogs = () => {
    dispatch(getAllBlogs());
  };

  const getallProducts = () => {
    dispatch(getAllProducts());
  };

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="/images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justift-content-between flex-wrap align-items-center">
              <div className="d-flex ga-30 align-items-center">
                <div>
                  <h6>Computer $ Laptop</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex ga-30 align-items-center">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex ga-30 align-items-center">
                <div>
                  <h6>Smart Television</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/watch.jpg" alt="camera" />
              </div>
              <div className="d-flex ga-30 align-items-center">
                <div>
                  <h6>Smartwatches</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex ga-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex ga-30 align-items-center">
                <div>
                  <h6>Mobile & Tablets</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex ga-30 align-items-center">
                <div>
                  <h6>headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex ga-30 align-items-center">
                <div>
                  <h6>Accessories</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">Featured Collection</div>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "featured") {
                  return (
                    <div key={index} className="col-3">
                      <div className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                          <button className="border-0 bg-transparent">
                            <img
                              src="/images/wish.svg"
                              alt="wishlist"
                              onClick={() => {
                                addToWish(item?._id);
                              }}
                            />
                          </button>
                        </div>
                        <div className="product-image text-center">
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
                            value={item?.totalrating}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="price">$ {item?.price}</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                              <img
                                src="/images/prodcompare.svg"
                                alt="compare"
                              />
                            </button>
                            <button className="border-0 bg-transparent">
                              <img
                                onClick={() =>
                                  navigate("/product/" + item?._id)
                                }
                                src="/images/view.svg"
                                alt="view"
                              />
                            </button>
                            <button className="border-0 bg-transparent">
                              <img src="/images/add-cart.svg" alt="addcart" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="/images/subbanner-01.jpg"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="/images/famous-02.jpg"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness</h6>
                <p className="text-dark">27-inch 5k Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="/images/famous-02.jpg"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="/images/famous-02.jpg"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Home Speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo*.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "special") {
                  return (
                    <SpecialProducts
                      id={item?._id}
                      key={index}
                      title={item?.title}
                      brand={item?.brand}
                      totalrating={item?.totalrating.toString()}
                      price={item?.price}
                      sold={item?.sold}
                      quantity={item?.quantity}
                      images={item?.images}
                    />
                  );
                }
              })}
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">Our Popular Products</div>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div key={index} className="col-3">
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                          <img
                            src="/images/wish.svg"
                            alt="wishlist"
                            onClick={() => {
                              addToWish(item?._id);
                            }}
                          />
                        </button>
                      </div>
                      <div className="product-image text-center">
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
                          value={item?.totalrating}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">$ {item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img src="/images/prodcompare.svg" alt="compare" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src="/images/view.svg"
                              alt="view"
                            />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img src="/images/add-cart.svg" alt="addcart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 ww-25">
                  <img src="/images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src="/images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src="/images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src="/images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src="/images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src="/images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src="/images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 ww-25">
                  <img src="/images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">Our Latest Blogs</div>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="col-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
