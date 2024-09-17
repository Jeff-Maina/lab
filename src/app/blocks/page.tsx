// import * as React from "react";
// import { components } from "./data/components_data";

// const page = () => {
//   return (
//     <main className="w-full min-h-screen p-4 h-auto pb-32">
//       <section className="w-full max-w-2xl m-auto">
//         <nav className="py-4 mb-12">
//           <span className="">Blocks.</span>
//         </nav>

//         <div className="w-full flex flex-col gap-6">
//           {components.filter((comp) => !comp.draft).map((comp, i) => (
//             <React.Fragment key={i}>{comp.component}</React.Fragment>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default page;

import * as React from "react";
import { components } from "./data/components_data";

const page = () => {
  return (
    <main className="w-full min-h-screen p-4 h-auto pb-32">
      <section className="w-full">
        <div className="w-full lg:columns-2 gap-2">
          {components
            .filter((comp) => !comp.draft)
            .map((comp, i) => (
              <div
                className="w-full relative min-h-[60vh] lg:min-h-96  flex items-center justify-center break-inside-avoid-column py-10 lg:py-20 border mb-2 rounded"
                key={i}
              >
                {comp.component}

                <small className="absolute bottom-3 left-3 text-neutral-500">{comp.label}</small>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default page;
