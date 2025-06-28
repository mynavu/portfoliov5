import { useEffect, useRef, useState } from 'react';
import './App.css';
import { About } from './About';
import { Links } from './Links';
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Other } from './Other';

function App() {
  const stateRef = useRef("state1");
  const bannerRef = useRef("state1");
  const navRef = useRef(null);
  const initRef = useRef(null);
  const [pageState, setPageState] = useState(null);

  useEffect(() => {
    bannerRef.current.innerHTML = 
        `
<pre>
  ╭──────────────────────────────────────────────────────────────────────────────────────────╮
                                                                                
  <span class="pink">...    *    .   *  .                             *</span>                     
<span class="pink">*  .  *     .   * .  .  *</span>           __  ___                     _    __       
  <span class="pink">.</span>      <span class="brown">|</span><span class="pink">*  ..   *   ..</span>           /  |/  /_  ______  ____ _   | |  / /_  __
   <span class="pink">.  *</span> <span class="brown">&#92;|</span>  <span class="pink">*</span>  ___  <span class="pink">. . *</span>         / /|_/ / / / / __ &#92;/ __ &#96;/   | | / / / / / 
<span class="pink">*</span>   <span class="brown">&#92;/   |/ &#92;/</span>{<span class="yellow">o</span>,<span class="yellow">-</span>}     <span class="pink">._</span>       / /  / / /_/ / / / / /_/ /    | |/ / /_/ / 
  <span class="brown">_&#92;_&#92;   |  /</span> /)  )<span class="pink">*</span> <span class="brown">_/_</span> <span class="pink">*</span>      /_/  /_/&#92;__, /_/ /_/&#92;__,_/     |___/&#92;__,_/  
      <span class="brown">&#92; &#92;| /,--</span>"<span class="brown">-</span>"<span class="brown">---</span>  <span class="pink">..</span>              /____/                                
<span class="brown">_-----&#92;&#96; |(,__,__/__/_</span> <span class="pink">.</span>                                      <span class="pink">*</span>
       <span class="brown">&#92; ||</span>      <span class="pink">..</span>                             
        <span class="brown">|||</span> <span class="pink">.</span>             <span class="pink">*</span>                                                    <span class="yellow">_</span> 
        <span class="brown">|||</span>                                          <span class="pink">*</span>                       <span class="orange">&lt;</span><span class="yellow">(</span>-<span class="yellow">)_</span>
        <span class="brown">|||</span>                                                                   <span class="yellow">(__/</span>
<span class="green">&quot;&quot;</span><span class="brown">,&nbsp;-=-~'&nbsp;.-^-&nbsp;_</span><span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="blue">~~~~~~~~~~~~~~~~~~~~~~~</span><span class="green">&quot;&quot;&quot;&quot;&quot;</span>
<span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="brown">&#96;</span><span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="blue">~~~~~~~~~~~~~~~~~~~</span><span class="green">&quot;&quot;&quot;</span>
     <span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span>

  ╰──────────────────────────────────────────────────────────────────────────────────────────╯
</pre>
`

    let i = 0;
    const text = "init portfolio";
    
    function typeNextChar() {
      if (i < text.length && initRef.current) {
        initRef.current.textContent = text.slice(0,i+1);
        i++;
        setTimeout(typeNextChar, 100);
      } else {
        initRef.current.classList.remove('typewriter');
      }
    }
    
    typeNextChar();

    const interval = setInterval(() => {
      stateRef.current = stateRef.current === "state1" ? "state2" : stateRef.current === "state2" ? "state3" : "state1";

      if (bannerRef.current) {
        bannerRef.current.innerHTML = stateRef.current === "state1" ? 
        `
<pre>
  ╭──────────────────────────────────────────────────────────────────────────────────────────╮
                                                                                
  <span class="pink">...    *    .   *  .            *                    *</span>                     
<span class="pink">*  .  *     .   * .  .  *</span>           __  ___                     _    __       
  <span class="pink">.</span>      <span class="brown">|</span><span class="pink">*  ..   *   ..</span>           /  |/  /_  ______  ____ _   | |  / /_  __
   <span class="pink">.  *</span> <span class="brown">&#92;|</span>  <span class="pink">*</span>  ___  <span class="pink"><span class="blue"> Z</span>. *</span>         / /|_/ / / / / __ &#92;/ __ &#96;/   | | / / / / / 
<span class="pink">*</span>   <span class="brown">&#92;/   |/ &#92;/</span>{<span class="yellow">-</span>,<span class="yellow">-</span>}<span class="blue"> z</span>   <span class="pink">._</span>       / /  / / /_/ / / / / /_/ /    | |/ / /_/ / 
  <span class="brown">_&#92;_&#92;   |  /</span> /)  )<span class="pink">*</span> <span class="brown">_/_</span> <span class="pink">*</span>      /_/  /_/&#92;__, /_/ /_/&#92;__,_/     |___/&#92;__,_/  
      <span class="brown">&#92; &#92;| /,--</span>"<span class="brown">-</span>"<span class="brown">---</span>  <span class="pink">..</span>              /____/                                
<span class="brown">_-----&#92;&#96; |(,__,__/__/_</span> <span class="pink">.</span>                                                     <span class="pink">*</span>
       <span class="brown">&#92; ||</span>      <span class="pink">..</span>                             
        <span class="brown">|||</span> <span class="pink">.</span>                        <span class="pink">*</span>                                         <span class="yellow">_</span>
        <span class="brown">|||</span>                                                      <span class="pink">*</span>           <span class="orange">&lt;</span><span class="yellow">(</span>o<span class="yellow">)_</span>
        <span class="brown">|||</span>                                                                   <span class="yellow">(__/</span>
<span class="green">&quot;&quot;</span><span class="brown">,&nbsp;-=-~'&nbsp;.-^-&nbsp;_</span><span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="blue">~~~~~~~~~~~~~~~~~~~~~~~</span><span class="green">&quot;&quot;&quot;&quot;&quot;</span>
<span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="brown">&#96;</span><span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="blue">~~~~~~~~~~~~~~~~~~~</span><span class="green">&quot;&quot;&quot;</span>
     <span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span>

  ╰──────────────────────────────────────────────────────────────────────────────────────────╯
</pre>
`

  : stateRef.current === "state2" ? 
`
<pre>
  ╭──────────────────────────────────────────────────────────────────────────────────────────╮
                                                                                
  <span class="pink">...    *    .   *  .                    *                             *</span>                     
<span class="pink">*  .  *     .   * .  .  *</span>           __  ___                     _    __       
  <span class="pink">.</span>      <span class="brown">|</span><span class="pink">*  ..   *   ..</span>           /  |/  /_  ______  ____ _   | |  / /_  __
   <span class="pink">.  *</span> <span class="brown">&#92;|</span>  <span class="pink">*</span>  ___  <span class="pink">. . *</span>         / /|_/ / / / / __ &#92;/ __ &#96;/   | | / / / / / 
<span class="pink">*</span>   <span class="brown">&#92;/   |/ &#92;/</span>{<span class="yellow">O</span>,<span class="yellow">O</span>} <span class="blue">!</span>   <span class="pink">._</span>       / /  / / /_/ / / / / /_/ /    | |/ / /_/ / 
  <span class="brown">_&#92;_&#92;   |  /</span> /)  )<span class="pink">*</span> <span class="brown">_/_</span> <span class="pink">*</span>      /_/  /_/&#92;__, /_/ /_/&#92;__,_/     |___/&#92;__,_/  
      <span class="brown">&#92; &#92;| /,--</span>"<span class="brown">-</span>"<span class="brown">---</span>  <span class="pink">..</span>              /____/                                
<span class="brown">_-----&#92;&#96; |(,__,__/__/_</span> <span class="pink">.</span>                               <span class="pink">*</span>                  
       <span class="brown">&#92; ||</span>      <span class="pink">..</span>                             
        <span class="brown">|||</span> <span class="pink">.</span>                                                      <span class="pink">*</span>           <span class="yellow">_</span>
        <span class="brown">|||</span>                                 <span class="pink">*</span>                                <span class="orange">&lt;</span><span class="yellow">(</span><<span class="yellow">)_</span>
        <span class="brown">|||</span>                                                                <span class="blue">._&#92;</span><span class="yellow">(__/</span><span class="blue">/_.</span>
<span class="green">&quot;&quot;</span><span class="brown">,&nbsp;-=-~'&nbsp;.-^-&nbsp;_</span><span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="blue">~~~~~~~~~~~~~~~~~~~~~~~</span><span class="green">&quot;&quot;&quot;&quot;&quot;</span>
<span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="brown">&#96;</span><span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="blue">~~~~~~~~~~~~~~~~~~~</span><span class="green">&quot;&quot;&quot;</span>
     <span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span>

  ╰──────────────────────────────────────────────────────────────────────────────────────────╯
</pre>
`
:
`
<pre>
  ╭──────────────────────────────────────────────────────────────────────────────────────────╮
                                                                                
  <span class="pink">...    *    .   *  .                             *</span>                     
<span class="pink">*  .  *     .   * .  .  *</span>           __  ___                     _    __       
  <span class="pink">.</span>      <span class="brown">|</span><span class="pink">*  ..   *   ..</span>           /  |/  /_  ______  ____ _   | |  / /_  __
   <span class="pink">.  *</span> <span class="brown">&#92;|</span>  <span class="pink">*</span>  ___  <span class="pink">. . *</span>         / /|_/ / / / / __ &#92;/ __ &#96;/   | | / / / / / 
<span class="pink">*</span>   <span class="brown">&#92;/   |/ &#92;/</span>{<span class="yellow">o</span>,<span class="yellow">-</span>}     <span class="pink">._</span>       / /  / / /_/ / / / / /_/ /    | |/ / /_/ / 
  <span class="brown">_&#92;_&#92;   |  /</span> /)  )<span class="pink">*</span> <span class="brown">_/_</span> <span class="pink">*</span>      /_/  /_/&#92;__, /_/ /_/&#92;__,_/     |___/&#92;__,_/  
      <span class="brown">&#92; &#92;| /,--</span>"<span class="brown">-</span>"<span class="brown">---</span>  <span class="pink">..</span>              /____/                                
<span class="brown">_-----&#92;&#96; |(,__,__/__/_</span> <span class="pink">.</span>                                      <span class="pink">*</span>
       <span class="brown">&#92; ||</span>      <span class="pink">..</span>                             
        <span class="brown">|||</span> <span class="pink">.</span>             <span class="pink">*</span>                                                    <span class="yellow">_</span> 
        <span class="brown">|||</span>                                          <span class="pink">*</span>                       <span class="orange">&lt;</span><span class="yellow">(</span>-<span class="yellow">)_</span>
        <span class="brown">|||</span>                                                                   <span class="yellow">(__/</span>
<span class="green">&quot;&quot;</span><span class="brown">,&nbsp;-=-~'&nbsp;.-^-&nbsp;_</span><span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="blue">~~~~~~~~~~~~~~~~~~~~~~~</span><span class="green">&quot;&quot;&quot;&quot;&quot;</span>
<span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="brown">&#96;</span><span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span><span class="blue">~~~~~~~~~~~~~~~~~~~</span><span class="green">&quot;&quot;&quot;</span>
     <span class="green">&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;</span>

  ╰──────────────────────────────────────────────────────────────────────────────────────────╯
</pre>
`
        ;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='main'>
      <p className='ml-5 mt-10 l-black'>Terminal</p>
      <p className='text-center l-black'>────────────────────────────────────────────────────────────────────────────────────────────────</p>
      <p className='mt-15 ml-10'><span className='pink'>visitor</span>@<span className='blue'>portfolio</span>:~$ <span className='typewriter' ref={initRef}></span></p>
      <p className='mb-3 ml-10 fade'>Launching portfolio v0.5 in terminal..</p>
      <div ref={bannerRef} className='flex banner flex-col items-center fade1'>
      </div>
      <div className='small fade2 flex flex-col justify-center items-center' ref={navRef}>
        <pre >
      {`╭───────────────╮ ╭───────────────╮ ╭───────────────╮ ╭──────────────╮ ╭──────────────╮`}
        </pre>
        <div >│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pointer" onClick={() => {setPageState('about')}}>About</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pointer" onClick={() => {setPageState('links')}}>Links</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pointer" onClick={() => {setPageState('skills')}}>Skills</span>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;<span className="pointer" onClick={() => {setPageState('projects')}}>Projects</span>&nbsp;&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pointer" onClick={() => {setPageState('other')}}>MaaS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│
        </div>
        <pre >
      {`╰───────────────╯ ╰───────────────╯ ╰───────────────╯ ╰──────────────╯ ╰──────────────╯`}
        </pre>
      </div>
  {pageState === 'about' && <About />}
  {pageState === 'links' && <Links />}
  {pageState === 'projects' && <Projects />}
  {pageState === 'skills' && <Skills />}
  {pageState === 'other' && <Other />}
  {pageState === null && 
  <div className='small flex flex-col items-center fade3'>
    <pre>
            {`╭──────────────────────────────────────────────────────────────────────╮`}
    </pre>
    <p>&nbsp;</p>
    <p className='text-center blue'>Welcome to my portfolio.</p>
    <p className='text-center'>Press on a section above to get started.</p>
    <p>&nbsp;</p>
    <pre>
            {`╰──────────────────────────────────────────────────────────────────────╯`}
    </pre>
  </div>
  }
  <p className='text-center mt-10 l-black'>────────────────────────────────────────────────────────────────────────────────────────────────</p>
  <p className='ml-5 l-black'>2025 © myna vu</p>
  </div>
  );
}

export default App;
