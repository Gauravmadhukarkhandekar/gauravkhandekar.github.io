import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaCode, FaJs, FaReact, FaPython, FaHtml5, FaCss3Alt, FaCopy, FaUndo } from 'react-icons/fa';

const CodePlayground = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const demos = [
    {
      id: 0,
      title: 'Gaurav\'s Fun Code Generator 🚀',
      language: '',
      icon: FaJs,
      description: '',
      initialCode: `// Gaurav's Fun Code Generator 🚀
// Warning: This code contains 100% pure Gaurav magic!

function generateGauravMagic() {
  const name = "Gaurav";
  const surname = "Khandekar";
  const emojis = ["🚀", "💻", "⚡", "🔥", "✨", "🎯", "💡"];
  
  console.log("=== GAURAV'S MAGIC GENERATOR ===");
  console.log("\\n🔥 Starting Gaurav's coding engine...");
  
  // Generate fun facts about Gaurav
  const facts = [
    "Gaurav can code faster than his coffee cools down ☕",
    "Gaurav's debug skills are legendary - bugs run away from him 🐛",
    "When Gaurav commits code, the repository smiles 😊",
    "Gaurav doesn't write bugs, he writes undocumented features 🐛➡️✨",
    "Gaurav's code is so clean, it sparkles in the sunlight ✨"
  ];
  
  console.log("\\n🎉 Fun Facts About Gaurav:");
  facts.forEach((fact, index) => {
    console.log((index + 1) + '. ' + fact);
  });
  
  // Generate Gaurav's superpowers
  const superpowers = [
    "Full-Stack Development",
    "Problem Solving",
    "Code Optimization", 
    "Team Leadership",
    "Continuous Learning"
  ];
  
  console.log("\\n⚡ Gaurav's Superpowers:");
  superpowers.forEach((power, index) => {
    const emoji = emojis[index % emojis.length];
    console.log(emoji + ' ' + power);
  });
  
  // Generate a fun quote
  const quotes = [
    "Code is poetry written in logic",
    "Debugging is like being a detective in a crime movie",
    "First, solve the problem. Then, write the code",
    "The best error message is the one that never shows up",
    "Code never lies, comments sometimes do"
  ];
  
  console.log("\\n💭 Gaurav's Wisdom:");
  console.log('"' + quotes[Math.floor(Math.random() * quotes.length)] + '"');
  
  console.log("Thanks for visiting Gaurav's portfolio! 🎉");
}

// Run the magic!
generateGauravMagic();`,
      expectedOutput: `=== GAURAV'S MAGIC GENERATOR ===

🔥 Starting Gaurav's coding engine...

🎉 Fun Facts:
1. Gaurav can code faster than coffee cools ☕
2. Bugs run away from Gaurav's debug skills 🐛
3. Gaurav's code sparkles in sunlight ✨

⚡ Superpowers:
🚀 Full-Stack Development
💻 Problem Solving
⚡ Code Optimization

💭 Wisdom: "Code is poetry written in logic"

Thanks for visiting Gaurav's portfolio! 🎉`
    }
  ];

  useEffect(() => {
    setCode(demos[activeDemo].initialCode);
    setOutput('');
  }, [activeDemo]);

  const runCode = async () => {
    setIsRunning(true);
    
    // Simulate code execution
    setTimeout(() => {
      setOutput(demos[activeDemo].expectedOutput);
      setIsRunning(false);
    }, 1000);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const resetCode = () => {
    setCode(demos[activeDemo].initialCode);
    setOutput('');
  };

  const activeDemoData = demos[activeDemo];

  return (
    <section id="playground" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Code Playground</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore live coding demos and interact with real code examples
          </p>
        </motion.div>

         <div className="max-w-7xl mx-auto">
           <div className={`grid gap-8 transition-all duration-700 ease-in-out ${
             output ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-4xl mx-auto'
           }`}>
             {/* Code Editor */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className={output ? 'lg:col-span-1' : 'col-span-1'}
             >
               <div className="glass-effect rounded-xl overflow-hidden">
                 {/* Header */}
                 <div className="bg-dark-800 px-6 py-4 border-b border-gray-700">
                   <div className="flex items-center justify-center">
                     <div className="flex items-center space-x-3">
                       <activeDemoData.icon className="text-primary-400" />
                       <div className="text-center">
                         <h3 className="text-white font-semibold">{activeDemoData.title}</h3>
                         <p className="text-gray-400 text-sm">{activeDemoData.description}</p>
                       </div>
                     </div>
                   </div>
                   <div className="flex items-center justify-end mt-2">
                     <div className="flex items-center space-x-2">
                       <motion.button
                         onClick={copyCode}
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                         className="p-2 text-gray-400 hover:text-primary-400 transition-colors"
                         title="Copy Code"
                       >
                         <FaCopy />
                       </motion.button>
                       <motion.button
                         onClick={resetCode}
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                         className="p-2 text-gray-400 hover:text-primary-400 transition-colors"
                         title="Reset Code"
                       >
                         <FaUndo />
                       </motion.button>
                     </div>
                   </div>
                 </div>

                 {/* Code Editor */}
                 <div className="relative">
                   <textarea
                     value={code}
                     onChange={(e) => setCode(e.target.value)}
                     className="w-full h-96 bg-dark-900 text-gray-100 p-6 font-mono text-sm resize-none focus:outline-none"
                     placeholder="Write your code here..."
                   />
                   <div className="absolute top-2 right-2 bg-dark-800 text-gray-400 text-xs px-2 py-1 rounded">
                     {activeDemoData.language}
                   </div>
                 </div>

                 {/* Run Button */}
                 <div className="bg-dark-800 px-6 py-4 border-t border-gray-700">
                   <div className="flex justify-center">
                     <motion.button
                       onClick={runCode}
                       disabled={isRunning}
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                         isRunning
                           ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                           : 'bg-gradient-to-r from-primary-500 to-purple-600 text-white hover:shadow-lg hover:shadow-primary-500/25'
                       }`}
                     >
                       <FaPlay className={isRunning ? 'animate-pulse' : ''} />
                       <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                     </motion.button>
                   </div>
                 </div>
               </div>
             </motion.div>

             {/* Output - Only appears when code is run */}
             {output && (
               <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.7, ease: "easeOut" }}
                 className="lg:col-span-1"
               >
                 <motion.div
                   initial={{ opacity: 0, x: 30, scale: 0.95 }}
                   animate={{ opacity: 1, x: 0, scale: 1 }}
                   transition={{ duration: 0.6, ease: "easeOut" }}
                   className="glass-effect rounded-xl overflow-hidden"
                 >
                   <div className="bg-dark-800 px-6 py-4 border-b border-gray-700">
                     <div className="flex items-center justify-center space-x-2">
                       <FaCode className="text-primary-400" />
                       <h3 className="text-white font-semibold">Output</h3>
                     </div>
                   </div>
                   <div className="p-6">
                     <div className="bg-dark-900 rounded-lg p-4 font-mono text-sm text-gray-100 whitespace-pre-wrap">
                       {output}
                     </div>
                   </div>
                 </motion.div>
               </motion.div>
             )}
           </div>
         </div>

      </div>
    </section>
  );
};

export default CodePlayground;
