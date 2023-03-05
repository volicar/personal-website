import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold"><span className="">Hi, I'm Vinícius</span> </h1>
      <h3 className="text-4xl my-3 text-gray-700">I'm a frontend developer.</h3>
      <p className="text-gray-700 mb-8"></p>
          <Button
           className="bg-purple-600 text-white px-6 hidden"
         >Hire Me!</Button> 
    </section>
  )
}

export default Hero;