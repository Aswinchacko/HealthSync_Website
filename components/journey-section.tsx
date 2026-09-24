// import { Search, Compass, Rocket, UserCheck } from "lucide-react";

// export function JourneySection() {
//   const steps = [
//     {
//       num: "01",
//       title: "Discovery",
//       desc: "Deep dive into your existing medical workflows and pain points.",
//       icon: <Search className="h-6 w-6" />,
//       color: "border-[#1A1053] text-[#1A1053]"
//     },
//     {
//       num: "02",
//       title: "Blueprint",
//       desc: "Custom mapping of our modular suite to your specific infrastructure.",
//       icon: <Compass className="h-6 w-6" />,
//       color: "border-cyan-600 text-cyan-600"
//     },
//     {
//       num: "03",
//       title: "Deployment",
//       desc: "Phased rollout with intensive staff training and data migration.",
//       icon: <Rocket className="h-6 w-6" />,
//       color: "border-green-500 text-green-500"
//     },
//     {
//       num: "04",
//       title: "Evolution",
//       desc: "Continuous updates and dedicated clinical account management.",
//       icon: <UserCheck className="h-6 w-6" />,
//       color: "border-sky-400 text-sky-400"
//     }
//   ];

//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="container mx-auto px-4 md:px-6">
        
//         {/* Journey Top */}
//         <div className="text-center mb-20">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1053]">
//             Your Journey to Digital Transformation
//           </h2>
//         </div>

//         <div className="relative max-w-5xl mx-auto mb-32">
//           {/* Connecting line for desktop */}
//           <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-slate-100 -z-10" />
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
//             {steps.map((step, i) => (
//               <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left relative">
//                 <div className={`h-20 w-20 rounded-full border-4 flex items-center justify-center bg-white mb-6 shadow-sm ${step.color}`}>
//                   {step.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-[#1A1053] mb-3">
//                   <span className="text-slate-400 mr-2">{step.num}.</span>
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-slate-500 leading-relaxed">
//                   {step.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Our Clients */}
//         <div className="text-center max-w-4xl mx-auto">
//           <h3 className="text-2xl font-bold text-[#1A1053] mb-10">Our Clients</h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             {["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"].map((client, i) => (
//               <div key={i} className="bg-slate-200 text-[#1A1053] font-bold px-8 py-3 rounded-lg shadow-inner">
//                 {client}
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
