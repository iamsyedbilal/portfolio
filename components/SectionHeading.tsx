import { motion } from "framer-motion";

type Props={number:string;title:string};
export default function SectionHeading({number,title}:Props){return <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.5}} className="mb-6 flex items-end gap-3 border-b border-white/10 pb-3"><span className="font-mono text-[9px] tracking-[.28em] text-[#a78bfa]">{number}</span><h2 className="text-2xl font-semibold tracking-[-.04em] text-white md:text-4xl">{title}</h2><span className="mb-1 hidden font-mono text-[8px] uppercase tracking-[.25em] text-slate-600 md:block">selected work</span></motion.div>}
