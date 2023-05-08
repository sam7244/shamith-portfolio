'use client'

import { useSearchParams } from 'next/navigation'
import React, { use } from 'react'
import { HeroImg } from '../../../../assets'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Hero from '../../../../components/Hero';


const DUMMY_DATA = [{
  id : 1234,
  name : "project 1",
  source : {HeroImg},
  date : '12-12-2022',
  description : "this is the best project i have ever seen"
},{
  id : 3456,
  name : "project 2",
  source : {HeroImg},
  date : '12-12-2022',
  description : "this is the best project i have ever seen"
},
{
  id : 43434,
  name : "project 3",
  source : {HeroImg},
  date : '12-12-2022',
  description : "this is the best project i have ever seen"
},
{
  id : 56465,
  name : "project 4",
  source : {HeroImg},
  date : '12-12-2022',
  description : "this is the best project i have ever seen"
}
]


//parmas can be used in this way also
//{params}:{params:{id:string}}

const ProjectHomePage = () => {
    const router = useSearchParams();
    const id = router.get('id');

    const filters = () => {
      return   DUMMY_DATA.filter((data) => data.id ===  Number(id) );
    }
    
    const data = filters();



  return (
    <div>
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          {/* <Image 
            alt="skdbfks"
            src={HeroImg}
          /> */}
        </div>
        {/* <div className="small-images-container">
          {data?.map((item, i) => (
            <Image
              key={i}
              src={HeroImg}
              className={
                i === index ? "small-image selected-image" : "small-image"
              }
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div> */}
      </div>

      <div className="product-detail-desc">
        <h1></h1>
        <div className="reviews">
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>(20)</p>
        </div>
        <h4>Details: </h4>
        <p>details</p>
        <p className="price">price</p>
       
        <div className="buttons">
          <button
            type="button"
            className="add-to-cart"
          
          >
            Add to Cart
          </button>
          <button type="button" className="buy-now" >
            Buy Now
          </button>
        </div>
      </div>
    </div>
            </div>
  )
}

export default ProjectHomePage