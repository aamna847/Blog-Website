
import React from 'react'

const techData  = [
  "Technology",
  "Artificial intelligence",
  "Virtul Reality",
  "Cyber Security",
  "Web Development",
  "Deep intelligence",
]

//inki imgs kha ha?
//inki images nhi hain srf boxes hain or unkay andar names hain yh cyber wagera walay
//img nh lgane?
//nhi srf box main yh 5 ya 6 nmaes jo hain bs wo show hojayien
//okh done thk h check krlo

//gg blkl theek h magar ap btaskty hain k msla kyan tah?
//styling ka issue tha functionality thk the. apna box ko hide krdya tha
//oh acha jazakAllah thanks 
//NO need iski build bna kr github pr deploy krlo
//okay theek h kl krlungi thanks apne help ki
//welcome hath ka hth krlo agr koi issue hoga tw dkh longa complete 
//main krne ko abhi hi krleti lkn ismain abhi 1 feature nai h wo dalna baki h readmore pr click krne se blog ki jo info ayegi wo abhi mene nahi dali yh dekhain
//dekha? g dkha ate apko krne ?//nai ata asal mai jinki vedio se kiya h unhon ne ptanhiq readmore sec nai krwaya or mujhy tu ata nahi h unhon nay bht mushkil smjhaaya h smjh bhi nai aya ab yh ptanhi kese krungi main
//ma krdu?
//ji agr ap abhi krskty hain tu krdain okh ap dkh le agr smjh na aye tw poch lena ok lkn baat synain mujhy koi acha channel btadain plz jis se main next js seekhlun
// yr mene abhi tk youtube sa nh prhaya next officl docs sa prha ha is lye dkhonga agr dkha tw send krdonga apko okay
//thk ha sab set ha check krlo ??
//krti hun ji theek h sb github pr daldun?kr hn build wo kese build?

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
            {/* <Image
              src={`/images/${category}.svg`}
              alt={category}
              className='w-16 h-16 mb-4'
              width={64}
              height={64}
            /> */}
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
