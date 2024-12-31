import React from 'react'

import BlogCard from '../components/Blogcard';

export default function Mega() {
  const posts =[
    {
      id:'1',
      title:" Machine Learning is a subset of AI ",
      description:"AI that enables systems to learn from data and improve their performance over time without being explicitly programmed. It powers applications like predictive analytics, recommendation systems, and autonomous vehicles.",
      date:"2024-12-30",
      imageUrl:"/images/blog1.jpg",
    },
    {
      id:'2',
      title:"Deep Learning, a specialized branch of machine learning",
      description:"Deep Learning utilizes large neural networks with many layers to analyze data. It's responsible for breakthroughs in image recognition, speech processing, and natural language understanding.",
      date:"2024-12-30", 
      imageUrl:"/images/blog2.jpg",
    },
    {
      id:'3',
      title:"NLP is Machine to Understand Human Language ",
    
      description:"NLP is the field of AI focused on enabling machines to understand, interpret, and respond to human language. It's used in chatbots, translation services, and sentiment analysis.",
      date:"2024-12-30",
      imageUrl:"/images/blog3.jpg",
    },
    {
      id:'4',
      title:"Computer Vision Seeing the World Through AI Eyes",
      description:"It's crucial in industries like healthcare (medical imaging), retail (visual search), and autonomous vehicles (object detection).",
      date:"2024-12-30",
      imageUrl:"/images/blog4.jpg",
    },
    {
      id:'5',
      title:"AI That Learns from Experience",
      description:"Reinforcement Learning is a type of machine learning where agents learn to make decisions. It's key to autonomous systems like robots and game-playing AIs.",
      date:"2024-12-30",
      imageUrl:"/images/blog5.jpg",
    },
    {
      id:'6',
      title:"Bringing AI to the physical world ",
      description:"Bringing AI to create robots capable of performing tasks autonomously. These robots are used in manufacturing, healthcare, and exploration.",
      date:"2024-12-30",
      imageUrl:"/images/blog6.jpg",
    },
    {
      id:'7',
      title:"Mimicking Human Expertise",
      description:"Expert Systems use AI to emulate human decision-making processes, typically in specialized fields such as medicine, finance, and engineering.",
      date:"2024-12-30",
      imageUrl:"/images/blog7.jpg",
    },
    {
      id:'8',
      title:"The Building Blocks of AI ",
      description:"Neural Networks are computational models inspired by the human brain. These networks help machines recognize patterns and learn from vast amounts of data.",
      date:"2024-12-30",
      imageUrl:"/images/blog8.jpg",
    },
    {
      id:'9',
      title:"Creating new content with machines",
      description:"Generative AI that generate new content, such as text, images, music, or even code. This field has led to the development of tools like GPT (for text) and GANs (for images).",
      date:"2024-12-30",
      imageUrl:"/images/blog9.jpg",
    },
    {
      id:'10',
      title:"AI Ethics Navigating the Moral Landscape of AI",
      description:"AI Ethics explores the responsible development and deployment of AI systems. Topics include bias, privacy concerns, and the impact of AI on jobs and society",
      date:"2024-12-30",
      imageUrl:"/images/blog10.jpg",
    },
    {
      id:'11',
      title:"Autonomous Systems AI That Acts Independently ",
      description:"Autonomous systems use AI to perform tasks without human intervention. These include self-driving cars, drones, and automated manufacturing systems that make decisions and take actions on their own.",
      date:"2024-12-30",
      imageUrl:"/images/blog11.jpg",
    },
    {
      id:'12',
      title:"Speech Recognition AI That Listens and Understands",
      description:"It powers virtual assistants like Siri and Alexa and is increasingly used for transcription, accessibility, and command-based control.",
      date:"2024-12-30",
      imageUrl:"/images/blog12.jpg",
    },
    {
      id:'13',
      title:"AI in Healthcare Revolutionizing Medicine ",
      description:"AI is transforming healthcare by improving diagnosis accuracy, personalizing treatment plans, and enabling predictive analytics.",
      date:"2024-12-30",
      imageUrl:"/images/blog13.jpg",
    },
   
    {
      id:'14',
      title:"Smart Solutions for a Smarter Market",
      description:"AI is reshaping the finance industry through algorithms that detect fraud, automate trading, assess credit risks, and provide financial advice.",
      date:"2024-12-30",
      imageUrl:"/images/blog14.jpg",
    },
    {
      id:'15',
      title:"Defending the Digital World ",
      description:"AI is playing an increasingly vital role in cybersecurity, helping detect and respond to threats in real-time. AI systems analyze vast amounts of data to spot anomalies and predict potential security breaches before they occur.",
      date:"2024-12-30",
      imageUrl:"/images/blog15.jpg",
    },
   
  ];
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
        Exploring the World of AI and Technology</h1>
        <div className='grid grid-col-1 sm:-grid-col-2 lg:grid-cols-3 gap-8'>
          {posts.map((post,index) =>(

          <div className='fade-in' key={post.id} >
            <div className='blog-card'>
              <BlogCard post={post} isDarkBackground={index%2 === 0}/>

            </div>
          </div>
         ) )}
        </div>
    </div>
  )
}