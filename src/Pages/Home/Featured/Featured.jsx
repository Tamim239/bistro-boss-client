import { SectionTitle } from "../../../Components/SectionTitle/SectionTitle"
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'

export const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-8 my-10 text-white">
        
        <SectionTitle subHeading={"check it out"} heading={'Featured Item'}></SectionTitle>
        <div className="md:flex justify-center items-center pb-20 pt-12 px-32 bg-slate-400 bg-opacity-60">
       <div>
        <img src={featuredImg} alt="" />
       </div>
       <div className="md:ml-10 text-white space-y-3">
        <p>Aug 20, 2029</p>
        <p className="uppercase ">where can i get more?</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto, repudiandae blanditiis repellendus hic cumque veritatis aliquid aut, officiis ut nihil! Voluptates dicta veritatis corrupti quos, similique eligendi inventore, ducimus cupiditate nulla minus provident cumque autem porro voluptatibus. Dolore, magnam.
        </p>
        <button className="btn btn-outline border-0 border-b-4">Read More</button>
       </div>


        </div>

    </div>
  )
}
