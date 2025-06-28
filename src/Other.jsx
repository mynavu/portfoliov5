import { useEffect, useRef, useState } from "react"

export const Other = () => {

    const [emote, setEmote] = useState("default");

    const stateRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        
        if (emote === "lightning") {
            stateRef.current = null;
            const interval = setInterval(() => { 
                stateRef.current = stateRef.current === null ? 
                "state1" : stateRef.current === "state1" ? 
                "state2" : stateRef.current === "state2" ? 
                "state3" : stateRef.current === "state3" ? 
                "state4" : stateRef.current === "state4" ? 
                "state5" : stateRef.current === "state5" ? 
                "state6" : stateRef.current === "state6" ? 
                "state7" : stateRef.current === "state7" ? 
                "state8" : stateRef.current === "state8" ? 
                "state9" : stateRef.current === "state9" ? 
                "state10" : stateRef.current === "state10" ? 
                "state11" : "state12"
                contentRef.current.innerHTML = stateRef.current === "state1" ? 
`<pre>



     ◯
    /|&#92;──* 
    / &#92;


</pre>`
                : stateRef.current === "state2" ? 
`<pre>


       *
     ◯_│
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state3" ? 
`<pre>

      *
       &#92; 
     ◯/
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state4" ? 
`<pre>

  <span class="yellow">&#96;</span>
<span class="yellow">──</span> *──     
  <span class="yellow">.</span>  ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state5" ? 
`<pre>

  <span class="yellow">&#92;</span>
 <span class="yellow">─</span> *──     
  <span class="yellow">/</span>  ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state6" ? 
`<pre>

   <span class="yellow">.</span>
  <span class="yellow">─*</span>──     
   <span class="yellow">'</span> ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state7" ? 
`<pre>


        <span class="yellow">*</span>
     ◯_/
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state8" ? 
`<pre>

        <span class="yellow">|&#92;,  &#92;_/&#96;</span>
       <span class="yellow"><* ─._/_</span>
     ◯_/ <span class="yellow">&#96;  &#92;  &#92;_’</span>
    /|         <span class="yellow">/&#92;__, </span>
    / &#92;       <span class="yellow">‘   &#92;</span>


</pre>`
                : stateRef.current === "state9" ? 
`<pre>

       <span class="yellow">. ,</span>
      <span class="yellow">─</span> * <span class="yellow">───.</span>
     ◯_/<span class="yellow">'     ───</span>
    /|          <span class="yellow">/&#92;</span>
    / &#92;           <span class="yellow">&#92;__/</span>
                   <span class="yellow">&#92;__</span>

</pre>`
                : stateRef.current === "state10" ? 
`<pre>
      

        *
     ◯_/       
    /|         
    / &#92;           <span class="yellow">&#92;</span>
                   <span class="yellow">&#92;_/</span>

</pre>`
                : stateRef.current === "state11" ? 
`<pre>
       

         
     ◯        
    /|&#92;──*
    / &#92;                <span class="yellow">,</span>
                   <span class="yellow">&#96;_</span>

</pre>`
                : 
`<pre>



     ◯
    /|&#92;──* 
    / &#92;


</pre>`;
                if (stateRef.current === "state9") {
                    document.body.style.background = "#b4acdd";
                } else if (stateRef.current === "state10" ) {
                    document.body.style.background = "#7165a8";
                } else if (stateRef.current === "state11" ) {
                    document.body.style.background = "#191724";
                } else if (stateRef.current === "state12") {
                    setEmote("default");
                    stateRef.current = null;
                }
            }, 300);
            return () => clearInterval(interval);
        };

        if (emote === "fire") {
            stateRef.current = null;
            const interval = setInterval(() => { 
                stateRef.current = stateRef.current === null ? 
                "state1" : stateRef.current === "state1" ? 
                "state2" : stateRef.current === "state2" ? 
                "state3" : stateRef.current === "state3" ? 
                "state4" : stateRef.current === "state4" ? 
                "state5" : stateRef.current === "state5" ? 
                "state6" : stateRef.current === "state6" ? 
                "state7" : stateRef.current === "state7" ? 
                "state8" : stateRef.current === "state8" ? 
                "state9" : stateRef.current === "state9" ? 
                "state10" : stateRef.current === "state10" ? 
                "state11" : stateRef.current === "state11" ? 
                "state12" : stateRef.current === "state12" ? 
                "state13" : stateRef.current === "state13" ? 
                "state14" : stateRef.current === "state14" ? 
                "state15" : "state16"
                contentRef.current.innerHTML = stateRef.current === "state1" ? 
`<pre>



     ◯
    /|&#92;──* 
    / &#92;


</pre>`
                : stateRef.current === "state2" ? 
`<pre>


       *
     ◯_│
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state3" ? 
`<pre>

      *
       &#92; 
     ◯/
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state4" ? 
`<pre>

  <span class="red">&#96;</span>
<span class="red">──</span> *──     
  <span class="red">.</span>  ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state5" ? 
`<pre>

  <span class="red">&#92;</span>
 <span class="red">─</span> *──     
  <span class="red">/</span>  ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state6" ? 
`<pre>

   <span class="red">.</span>
  <span class="red">─*</span>──     
   <span class="red">'</span> ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state7" ? 
`<pre>
     

        
     ◯  <span class="orange">*</span>
    /|&#92;/ 
    / &#92;


</pre>`
                : stateRef.current === "state8" ? 
`<pre>
     

        <span class="orange">.</span>
     ◯ <span class="orange">.</span><span class="yellow">*</span><span class="orange">.</span>
    /|&#92;/ 
    / &#92;


</pre>`

                : stateRef.current === "state9" ? 
`<pre>
     

        <span class="orange">)</span>
     ◯ <span class="orange">(</span><span class="yellow">*</span><span class="orange">.</span>
    /|&#92;/ 
    / &#92;


</pre>`
                : stateRef.current === "state10" ? 
`<pre>

       <span class="red">.'</span>
        <span class="orange">)'</span>
     ◯ <span class="orange">(</span><span class="yellow">*</span><span class="orange">.</span>
    /|&#92;/ 
    / &#92;


</pre>`
                : stateRef.current === "state11" ? 
`<pre>
        <span class="red">'.</span>
       <span class="red">'..</span>
       <span class="orange">.'</span>
     ◯ <span class="orange">'</span><span class="yellow">*</span><span class="orange">'</span>
    /|&#92;/ 
    / &#92;


</pre>`
                : stateRef.current === "state12" ? 
`<pre>

        <span class="red">:'</span>
       <span class="orange">; .</span>
     ◯  <span class="yellow">*</span><span class="orange">'</span>
    /|&#92;/ 
    / &#92;
    

</pre>`
                : stateRef.current === "state13" ? 
`<pre>
        <span class="red">'</span>
        <span class="red">.'</span>
       <span class="orange">' '</span>
     ◯ <span class="orange">.</span><span class="yellow">*</span><span class="orange">)</span>
    /|&#92;/ 
    / &#92;


</pre>`
                : stateRef.current === "state14" ? 
`<pre>

         <span class="red">,</span>
       <span class="orange">.(</span>
     ◯  <span class="yellow">*</span>
    /|&#92;/ 
    / &#92;


</pre>`
                : stateRef.current === "state15" ? 
`<pre>
     

        <span class="orange">.</span>
     ◯ <span class="orange">.</span><span class="yellow">*</span><span class="orange">.</span>
    /|&#92;/ 
    / &#92;


</pre>`
                : 
`<pre>



     ◯
    /|&#92;──* 
    / &#92;


</pre>`;

                if (stateRef.current === "state16") {
                    setEmote("default");
                    stateRef.current = null;
                }

            }, 300);
            return () => clearInterval(interval);
        };

        if (emote === "spark") {
            stateRef.current = null;
            const interval = setInterval(() => { 
                stateRef.current = stateRef.current === null ? 
                "state1" : stateRef.current === "state1" ? 
                "state2" : stateRef.current === "state2" ? 
                "state3" : stateRef.current === "state3" ? 
                "state4" : stateRef.current === "state4" ? 
                "state5" : stateRef.current === "state5" ? 
                "state6" : stateRef.current === "state6" ? 
                "state7" : stateRef.current === "state7" ? 
                "state8" : stateRef.current === "state8" ? 
                "state9" : stateRef.current === "state9" ? 
                "state10" : stateRef.current === "state10" ? 
                "state11" : stateRef.current === "state11" ? 
                "state12" : stateRef.current === "state12" ? 
                "state13" : stateRef.current === "state13" ? 
                "state14" : "state15"
                contentRef.current.innerHTML = stateRef.current === "state1" ? 
`<pre>



     ◯
    /|&#92;──*
    / &#92;


</pre>`
                : stateRef.current === "state2" ? 
`<pre>


       *
     ◯_│
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state3" ? 
`<pre>

      *
       &#92; 
     ◯/
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state4" ? 
`<pre>

  <span class="blue">&#96;</span>
<span class="blue">──</span> *──     
  <span class="blue">.</span>  ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state5" ? 
`<pre>

  <span class="blue">&#92;</span>
 <span class="blue">─</span> *──     
  <span class="blue">/</span>  ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state6" ? 
`<pre>

   <span class="blue">.</span>
  <span class="blue">─*</span>──     
   <span class="blue">'</span> ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state7" ? 
`<pre>
     
        

     ◯  <span class="blue">*</span>
    /|&#92;/ 
    / &#92;


</pre>`
                : stateRef.current === "state8" ? 
`<pre>
     
        

     ◯      <span class="blue">,   .</span>
    /|&#92;──<span class="blue">*        +</span>
    / &#92;


</pre>`
                : stateRef.current === "state9" ? 
`<pre>
     

        
     ◯
    /|&#92;──*<span class="blue">         :</span>
    / &#92;        <span class="blue">*</span>


</pre>`

                : stateRef.current === "state10" ? 
`<pre>
     

        
     ◯
    /|&#92;──*<span class="blue">    +</span>
    / &#92;          <span class="blue">,  .</span>


</pre>`
                : stateRef.current === "state11" ? 
`<pre>
     

        
     ◯           <span class="blue">*</span>
    /|&#92;──*<span class="blue">    :</span>
    / &#92;    


</pre>`
                : stateRef.current === "state12" ? 
`<pre>
     

        
     ◯         <span class="blue">,    .</span>
    /|&#92;──*<span class="blue">            +</span>
    / &#92;


</pre>`
                : stateRef.current === "state13" ? 
`<pre>
     

                   <span class="blue">*</span>
     ◯                 <span class="blue">*</span>           
    /|&#92;──*<span class="blue">    .         .</span>
    / &#92;          <span class="blue">+   .</span>


</pre>`
                : stateRef.current === "state14" ? 
`<pre>

                  <span class="blue">+</span>
                                               
     ◯                       <span class="blue">.</span>
    /|&#92;──*<span class="blue"> .</span>
    / &#92;                                  
                    <span class="blue">+</span>

</pre>`
                : 
`<pre>



     ◯
    /|&#92;──* 
    / &#92;


</pre>`;

                if (stateRef.current === "state15") {
                    setEmote("default");
                    stateRef.current = null;
                }

            }, 200);
            return () => clearInterval(interval);
        };


        if (emote === "plant") {
            stateRef.current = null;
            const interval = setInterval(() => { 
                stateRef.current = stateRef.current === null ? 
                "state1" : stateRef.current === "state1" ? 
                "state2" : stateRef.current === "state2" ? 
                "state3" : stateRef.current === "state3" ? 
                "state4" : stateRef.current === "state4" ? 
                "state5" : stateRef.current === "state5" ? 
                "state6" : stateRef.current === "state6" ? 
                "state7" : stateRef.current === "state7" ? 
                "state8" : stateRef.current === "state8" ? 
                "state9" : stateRef.current === "state9" ? 
                "state10" : stateRef.current === "state10" ? 
                "state11" : stateRef.current === "state11" ? 
                "state12" : stateRef.current === "state12" ? 
                "state13" : "state14"
                contentRef.current.innerHTML = stateRef.current === "state1" ? 
`<pre>



     ◯
    /|&#92;──*
    / &#92;


</pre>`
                : stateRef.current === "state2" ? 
`<pre>


       *
     ◯_│
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state3" ? 
`<pre>

      *
       &#92; 
     ◯/
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state4" ? 
`<pre>

  <span class="green">&#96;</span>
<span class="green">──</span> *──     
  <span class="green">.</span>  ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state5" ? 
`<pre>

  <span class="green">&#92;</span>
 <span class="green">─</span> *──     
  <span class="green">/</span>  ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state6" ? 
`<pre>

   <span class="green">.</span>
  <span class="green">─*</span>──     
   <span class="green">'</span> ◯)
    /| 
    / &#92;


</pre>`
                : stateRef.current === "state7" ? 
`<pre>
     
        

     ◯  <span class="green">*</span>
    /|&#92;/ 
    / &#92;


</pre>`
                : stateRef.current === "state8" ? 
`<pre>
     

        
     ◯
    /|&#92;──  <span class="green">*</span>
    / &#92;


</pre>`

                : stateRef.current === "state9" ? 
`<pre>
     

        
     ◯
    /|&#92;──・
    / &#92;     <span class="green">*</span>


</pre>`
                : stateRef.current === "state10" ? 
`<pre>
     

        
     ◯
    /|&#92;──* 
    / &#92;     <span class="green">↟</span>
               

</pre>`
                : stateRef.current === "state11" ? 
`<pre>
     

        
     ◯
    /|&#92;──* 
    / &#92;     <span class="green">𖧧</span>
               

</pre>`
                : stateRef.current === "state12" ? 
`<pre>
     

        
     ◯
    /|&#92;──* 
    / &#92;     <span class="green">|</span>
               

</pre>`
                : stateRef.current === "state13" ? 
`<pre>
     

        
     ◯
    /|&#92;──*  <span class="l-pink">*</span>
    / &#92;     <span class="green">│</span>     
              

</pre>`
                : 
`<pre>
     

        
     ◯
    /|&#92;──*  <span class="pink">✿</span>
    / &#92;     <span class="green">│ɞ</span>     
              

</pre>`;

                if (stateRef.current === "state14") {
                    setEmote("default");
                    stateRef.current = null;
                }

            }, 200);
            return () => clearInterval(interval);
        };

    }, [emote]);

    return (
        <div className="small banner flex flex-col items-center">
            <pre>
            {`╭──────────────────────────────────────────────────────────────────────╮`}
        </pre>
            <br />
            <div className="self-start marginleft" ref={contentRef}>
<pre>
    <code>
    <p className="font-thin">&nbsp;Magic as</p>
    <p className="font-thin">a Service!</p>
    <br/>
    {"     ◯"}<br />
    {"    /|\\"}──*<br />
    {"    / \\"}
    <br/>
    <br/>
    <br/>
  </code>
</pre>
            </div>
            <div className="flex flex-row justify-center text-2xl gap-7">
                <div className="cursor-pointer font-thin yellow" onClick={() => setEmote("lightning")}>⚡︎</div>
                <div className="cursor-pointer font-thin red" onClick={() => setEmote("fire")}>ঌ</div>
                <div className="cursor-pointer font-thin blue" onClick={() => setEmote("spark")}>✦</div>
                <div className="cursor-pointer font-thin green" onClick={() => setEmote("plant")}>𖧧</div>
            </div>
            <br />
        <pre>
            {`╰──────────────────────────────────────────────────────────────────────╯`}
      </pre>
        </div>
    )
}