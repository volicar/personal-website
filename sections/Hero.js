import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold"> Hi I'm <span className='dark:text-purple-600'>Vinícius</span> </h1>
      <h3 className="text-4xl my-3">I am Software Engineer</h3>
      <p className="text-gray-700 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque velit sunt ut fugit maiores tempore enim tempora. Beatae laboriosam recusandae exercitationem pariatur quo velit,
         molestiae voluptatibus mollitia labore totam.</p>
         {/* <Button
           className="bg-purple-600 text-white px-6"
         >Hire Me!</Button> */}
    </section>
  )
}

export default Hero;