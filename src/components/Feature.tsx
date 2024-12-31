
import React from 'react'

const techData  = [
  "Technology",
  "Artificial intelligence",
  "Virtul Reality",
  "Cyber Security",
  "Web Development",
  "Deep intelligence",
]


export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-100 mb-40'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fadein transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600 '>
          How AI is Shaping the World Around Us</h2>
          <div className='mx-auto max-w-7xl px-5'>
            <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Exploring Our Categories </h1> 
            <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4'>
      {techData.map((category, index) => {
        return (
          <div
            key={index}
            className='flex flex-col items-center justify-center text-center bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300'
          >
           
            <h3 className='text-lg font-semibold text-gray-800'>{category}</h3>
          </div>
        );
      })}
    </div>
            </div>
            <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>
            Artificial Intelligence (AI) encompasses a wide range of technologies designed to enable machines to mimic human intelligence and perform tasks autonomously. It includes core fields such as *Machine Learning (ML), where algorithms learn from data to improve performance; **Deep Learning, which uses neural networks to process complex patterns; and **Natural Language Processing (NLP), focused on enabling machines to understand and respond to human language. **Computer Vision* empowers machines to interpret and analyze visual information, while *Reinforcement Learning* teaches AI systems to make decisions through trial and error. Additionally, AI drives advancements in *Robotics, **Generative AI, and **Autonomous Systems, enhancing industries from healthcare to finance. As AI technologies evolve, ethical considerations and their societal impact, particularly in areas like **AI Ethics* and *Cybersecurity*, are becoming increasingly important. Together, these fields form the backbone of AI transformative power across multiple sectors.
            </p>
      </section>
    </div>
  ) 
}
