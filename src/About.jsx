import { useRef, useEffect, useState } from "react";

export const About = () => {
    const contentRef1 = useRef(null);
    const contentRef2 = useRef(null);
    const [hat, setHat] = useState(0);
    const hats = ["🧢","👒","🎩","🎓","👑"];
    const roles = ["full-stack eng", "front-end eng", "web dev", "student", "desinger"]

    useEffect(() => {
        if (contentRef1.current) {
        contentRef1.current.innerHTML = `
<pre>
     _{<span class="yellow">o</span>,<span class="yellow">o</span>}___ 
     v(  (vvv' 
       " " 
</pre>
          `;

          contentRef2.current.innerHTML = `
          <pre>
  
GPA: <span class="green">░░░▒▒▒▓▓▓█████████████████ 90%</span>
  
Sleep: <span class="blue">░░▒▒▓▓ 10%</span>
  
Vibes: <span class="pink">░░░▒▒▒▓▓▓█████████████████████████ 120%</span>
  

          </pre>

          `

        }
      }, []);
    

    return (
      <div className="small banner flex flex-col items-center">
        <pre>
            {`╭──────────────────────────────────────────────────────────────────────╮`}
        </pre>
        <p>&nbsp;</p>
        <p>Hello! I am a software developer</p>
        <p>who wear many hats. Click the hat to see.</p>
        <p>\</p>
        <p>&nbsp;<span onClick={() => {setHat((prev => prev + 1))}} className="pointer big">{hats[hat % hats.length]}</span></p>
        <div ref={contentRef1} className="banner">
        </div>
        <p className="text-center">{roles[hat % hats.length]}</p>
        <div ref={contentRef2} className="banner">
        </div>
        <pre>
            {`╰──────────────────────────────────────────────────────────────────────╯`}
      </pre>
      </div>
    );
  };
  