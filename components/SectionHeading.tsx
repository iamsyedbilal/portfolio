import { motion } from "framer-motion";

type Props={number:string;title:string};
export default function SectionHeading({number,title}:Props){return <motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.55}} className="mb-8 flex items-end gap-4 border-b border-white/10 pb-4"><span className="font-mono text-[10px] tracking-[.28em] text-[#a78bfa]">{number}</span><h2 className="text-3xl font-semibold tracking-[-.04em] text-white md:text-5xl">{title}</h2><span className="mb-1.5 hidden font-mono text-[9px] uppercase tracking-[.25em] text-slate-600 md:block">selected work</span></motion.div>}
