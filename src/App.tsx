import { useState } from 'react';
import './App.css'
import Hamster from './icons/Hamster'

function App() {
   
  const levelNames = [
    "Bronze", //From 0 to 4999 coins
    "Silver", //From 5000 Coins to 24,999 Coins
    "Gold",  //From 25,000 Coins to 99,999 Coins
    "Platinium", //From 100,000 Coins to 999,999 Coins
    "Diamond",  //From 1,000,000 Coins to 2,000,000 Coins
    "Epic",  //From 2,000,000 Coins t o 10,000,000 Coins
    "Legendry",  //From 10,000,000 Coins to 50,000,000 Coins
    "Masters",  //From 50,000,000 Coins to 100,000,000 Coins
    "GrandMasters",  //From 100,000,000 Coins to 1,000,000,000 Coins
    "Lord"   //From 1,000,000,000 Coins to (INFINITE) Coins
  ];

  const levelMinPoints = [
    0, //Bronze
    5000,  //Silver
    25000,  //Gold
    100000,  //Platinium
    10000000,  //Diamond
    20000000,  //Epic
    100000000, //Legendry
    500000000, //Masters
    1000000000, //GrandMasters
    10000000000,//Lord
  ];

  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints]= useState(22749365);

const calculateProgress = () => {
  if(levelIndex >= levelNames.length - 1) {
    return 100;
  }
  const currentLevelMin = levelMinPoints[levelIndex];
  const nextLevelMin = levelMinPoints[levelIndex + 1];
  const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
  return Math.min (progress,100);
};


  return (
        <div className="bg-black flex justify-center">
  <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">

    <div className="px-4 z-10">

      <div className="flex items-center space-x-2 pt-4">
        <div className="p-1 rounded-lg bg-[#1d2025]">
          <Hamster size={24} className="text-[#d4d4d4]"/>
        </div>
      </div>
      <div><p className="text-sm">VAB (CEO)</p>
      </div>  
    </div>
    
  <div className="flex items-center justify-between space-x-4 mt-1">
    <div className="flex items-center w-1/3">
    <div className="w-full">
      <div className="flex justify-between">
        <p className="text-sm">{levelNames[levelIndex]}</p>
        <p className="text-sm">{levelIndex + 1}<span className="text-[#95908a]">/{levelNames.length}</span></p>
      </div>
      <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
        <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full"><div className="progress-gradient h-2 rounded-full" style={{width: `${calculateProgress()}%` }}></div> </div>
      </div>
      </div>
      </div>
  </div>
  </div>


</div>


  )
}

export default App
