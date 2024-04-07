
import React from 'react';
import { Carousel } from "@material-tailwind/react";

 function Carouselforum() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="https://cdn.discordapp.com/attachments/1025049974318305341/1224465697757728858/image.png?ex=661d978b&is=660b228b&hm=c337ae78af40dccffe96b32428151fbbb86a85b8236eb5c775d6e50038c32d32&"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://cdn.discordapp.com/attachments/1025049974318305341/1224465736420818995/image.png?ex=661d9795&is=660b2295&hm=004509c61572abdb56cefbd47901ec7f3dc52616c9582f382acd052ac5f406ef&"
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default Carouselforum