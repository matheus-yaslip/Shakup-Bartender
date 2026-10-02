"use client";

import Image from "next/image";

export default function First() {
  return (
    <>
      <div className="first">
        <div className="base">
          <div className="left">
            <div className="texto">
              <span>Descubra novas possibilidades</span>
              <h1>A inovação que transforma o seu dia a dia</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium. Curabitur ac urna sed erat
                lacinia tristique. Nullam tempor, nisl non vehicula sodales,
                lorem nisi vestibulum nunc, sit amet sagittis justo odio a
                justo.
              </p>
              <div className="botoes">
                <a href="">Lorem ipsum</a>
                <a href="">Lorem ipsum</a>
              </div>
            </div>
          </div>
          <div className="right">
            <Image
              src="/siteBase/right.jpg"
              alt="Description"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
}
