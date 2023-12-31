import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { youtube } from "../assets";
import { SectionWrapper } from "../hoc";
import { 
  effects,
  projects

} from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-10 rounded-2xl sm:w-[300px] w-full'
        >
        <div className='relative w-full h-[200px]' onClick={() => window.open(source_code_link, "_blank")}>
          <img
            src={image}
            
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={youtube}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex items-center justify-center'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        </div>
        
      </Tilt>
    </motion.div>
  );
};

const EffectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full'
        >
        <div className='relative w-full h-[200px]' onClick={() => window.open(source_code_link, "_blank")}>
          <img
            src={image}
            
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={youtube}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex items-center justify-center'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Project</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my experience through
          my years when in college.
        </motion.p>
      </div>

      <motion.div className="mt-24 flex items-center justify-center">
        <h2 className={`${styles.sectionHeadText}`}>Game Project</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <motion.div className="mt-24 flex items-center justify-center">
        <h2 className={`${styles.sectionHeadText}`}>Effects</h2>
      </motion.div>
      
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {effects.map((effect, index) => (
            <EffectCard key={`effect-${index}`} index={index} {...effect} />
          ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(Works, "work");