import { useRef, useEffect } from "react";

export const Skills = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
          contentRef.current.innerHTML = `
<pre>
╭──────────────────────────────────────────────────────────────────────╮


    Languages: <span class="yellow">Javascript</span>, <span class="d-blue">Python</span>, <span class="blue">SQl</span>, <span class="orange">HTML</span>, <span class="purple">CSS</span>

    Frameworks/Libraries: <span class="teal">React.js</span>, <span class="green">Node.js</span>, <span class="blue">Tailwind CSS</span>

    Technologies: <span class="d-green">Supabase</span>, <span class="blue">PostgreSQL</span>, <span class="red">Git</span>, <span class="orange">TypeORM</span>, <span class="green">Swagger</span>, <span class="teal">Netlify</span>, <span class="red">Oracle</span>

    Creative: <span class="blue">Photoshop</span>, <span class="yellow">Illustrator</span>, <span class="teal">MAYA</span>, <span class="purple">Canva</span>, <span class="red">Figma</span>, <span class="green">Affinity</span>


╰──────────────────────────────────────────────────────────────────────╯

  </pre>
          `;
        }
      }, []);
    

    return (
      <div className="small banner flex flex-col items-center">
        <div ref={contentRef}>

        </div>
      </div>
    );
  };
  