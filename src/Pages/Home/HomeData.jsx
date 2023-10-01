import Rating from "react-rating";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

import PropTypes from 'prop-types';

const HomeData = ({ product }) => {
  const { img_url, name, price, rating, discount, category } = product;

  const discountPrice = (price / 100) * discount;

  const afterDiscount = (price - discountPrice).toFixed(2);


  return (
    <div className="max-w-2xl mx-auto">
      

      <div className="bg-white  shadow-md rounded-lg max-w-sm h-[660px] dark:bg-gray-800 dark:border-gray-700 relative">
      {discount === 0 ? (
        ""
      ) : (
        <span className="text-xl font-semibold bg-red-400 px-3 relative text-white py-1">
          -{discount}% OFF
        </span>
      )}

        <img className="rounded-t-lg p-8" src={img_url} alt="product image" />

        <div className="px-5 pb-5 space-y-2">

            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {name}
            </h3>
            <h3 className="text-gray-900 font-semibold tracking-tight dark:text-white">
              {category}
            </h3>


          <div className="flex gap-2">
            <Rating
              initialRating={rating}
              readonly
              emptySymbol={
                <FaStarHalfAlt className="text-red-400"></FaStarHalfAlt>
              }
              fullSymbol={<FaStar className="text-red-400"></FaStar>}
            />
            <p>{rating}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-baseline">
              {discount === 0 ? (
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${price}
                </span>
              ) : (
                <div>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white ">
                    ${afterDiscount}
                  </span>
                  <span className="font-bold text-gray-900 dark:text-white line-through">
                    ${price}
                  </span>
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
};

HomeData.propTypes = {
  product: PropTypes.object.isRequired
};
export default HomeData;
