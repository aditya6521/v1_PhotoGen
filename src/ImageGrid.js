import React from "react";
import useFirestore from "./hooks/useFirestore";
import { motion} from "framer-motion";



const ImageGrid=({setSelectedImage})=>{
    const {docs}=useFirestore("images");
    console.log(docs);


    return(
        <div className="img-grid">
            {docs && docs.map(doc=>(
                <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover={{opacity:1}}
                onClick={()=> setSelectedImage(doc.url)}>
                    <motion.img className="imgg" src={doc.url} all="uploaded pic"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}

                    />
                    </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;