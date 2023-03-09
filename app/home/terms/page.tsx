import Image from "next/image";
export default function Page() {
  return (
    <div className="snap-y snap-mandatory bg-[#1C1A22] h-screen">
      <section className="text-gray-400 bg-stone-900 body-font h-screen">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            alt="hero"
            width={200}
            height={200}
            src="/license.png"
            className="contrast-75 lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg"
          ></Image>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              MIT Copyright (c) 2012-2022
            </h1>
            <p className="leading-relaxed mb-8 text-sm capitalize">
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the &quot;Software&quot;), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions.<br></br>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
              <br></br>
              The Software Is Provided &quot;As Is&quot;, Without Warranty Of
              Any Kind, Express Or Implied, Including But Not Limited To The
              Warranties Of Merchantability, Fitness For A Particular Purpose
              And Noninfringement.<br></br>
              In No Event Shall The Authors Or Copyright Holders Be Liable For
              Any Claim, Damages Or Other Liability, Whether In An Action Of
              Contract, Tort Or Otherwise, Arising From, Out Of Or In Connection
              With The Software Or The Use Or Other Dealings In The Software.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
