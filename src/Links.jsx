import { useRef, useEffect } from "react";

export const Links = () => {
    const contentRef = useRef(null);
/*
    useEffect(() => {
        if (contentRef.current) {
          contentRef.current.innerHTML = `
<pre>
╭──────────────────────────────────────────────────╮

Resume

Linkedin

Github

E-mail

╰──────────────────────────────────────────────────╯
  </pre>
          `;
        }
      }, []);
      */
    

    return (
      <div className="small flex flex-col banner" ref={contentRef}>
        <pre>
            {`╭──────────────────────────────────────────────────────────────────────╮`}
        </pre>
        <div className="smallest flex flex-col banner">
        <p>&nbsp;</p>
        <p className="big">&nbsp;&nbsp;⛅</p>
        <a className="group red" href='./Resume.pdf' target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="group-hover:hidden">⬦</span><span className="hidden group-hover:inline">⬥</span> Resume</a>
        <a className="group yellow" href="mailto:avu13@uclive.ac.nz">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="group-hover:hidden">⬦</span><span className="hidden group-hover:inline">⬥</span> E-Mail</a>
        <a className="group green" href="https://github.com/mynavu" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="group-hover:hidden">⬦</span><span className="hidden group-hover:inline">⬥</span> GitHub</a>
        <a className="group blue" href="https://www.linkedin.com/in/myna-vu-237091322/" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="group-hover:hidden">⬦</span><span className="hidden group-hover:inline">⬥</span> LinkedIn</a>
        <a className="group purple" onClick={()=>{alert("please be serious")}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="group-hover:hidden">⬦</span><span className="hidden group-hover:inline">⬥</span> Roblox</a>
        <p>&nbsp;</p>
        </div>
        <pre>
            {`╰──────────────────────────────────────────────────────────────────────╯`}
        </pre>
      </div>
    );
  };
  