import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const ProductCart = (props) => {
  const { grid } = props;
  let location = useLocation();
  
  return (
    <>
      <div className={` ${location.pathname === '/product' ? `gr-${grid}` : 'col-3'} `}>
      <Link to=':id' className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'><img src='/images/wish.svg' alt='wishlist' /></button>
        </div>
        <div className='product-image'>
            <img src='/images/watch.jpg' className='img-fluid' alt='product_image' />
            <img src='/images/watch-01.jpg' className='img-fluid' alt='product_image' />
        </div>
        <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
            <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>At vero eso et accusamus et iusto odio dignissimos ducimus qui blanditiis prasentium voluptatum deleniti atque corrupti quos dolores et quos moletias excepturi sint occaecati cupiditate non provident, simlique sunt...</p>
            <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
                <button className='border-0 bg-transparent'><img src='/images/prodcompare.svg' alt='compare' /></button>
                <button className='border-0 bg-transparent'><img src='/images/view.svg' alt='view' /></button>
                <button className='border-0 bg-transparent'><img src='/images/add-cart.svg' alt='addcart' /></button>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname === '/product' ? `gr-${grid}` : 'col-3'} `}>
      <Link className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'><img src='/images/wish.svg' alt='wishlist' /></button>
        </div>
        <div className='product-image'>
            <img src='/images/watch.jpg' className='img-fluid' alt='product_image' />
            <img src='/images/watch-01.jpg' className='img-fluid' alt='product_image' />
        </div>
        <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
            <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>At vero eso et accusamus et iusto odio dignissimos ducimus qui blanditiis prasentium voluptatum deleniti atque corrupti quos dolores et quos moletias excepturi sint occaecati cupiditate non provident, simlique sunt...</p>
            <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
                <button className='border-0 bg-transparent'><img src='/images/prodcompare.svg' alt='compare' /></button>
                <button className='border-0 bg-transparent'><img src='/images/view.svg' alt='view' /></button>
                <button className='border-0 bg-transparent'><img src='/images/add-cart.svg' alt='addcart' /></button>
            </div>
        </div>
      </Link>
    </div>
    </>
    
  )
}

export default ProductCart
