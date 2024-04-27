import { IAccordion, ICard } from './conveyancing.interface';

export const ACCORDION: IAccordion[] = [
  {
    title: 'What is conveyancing?',
    description:
      "<p class='text-sm font-normal'>Conveyancing is the process of moving the legal ownership of property or land from one person or entity to another.</p>",
  },
  {
    title: 'What is conveyancer?',
    description:
      "<p class='text-sm font-normal'>A conveyancer is a property transfer specialist. They prepare the legal documents that form part of real estate transactions such as the purchase and sale of properties, settlements and title transfers.</p>",
  },
  {
    title: 'How much does it cost?',
    description: `<p class='text-sm font-normal'>Whether you are buying or selling property, our services are set at a fixed price.</p>

      <p class='text-sm font-normal mb-4'>The only cost variable relates to disbursements.</p>

      <p class='text-sm font-normal mb-4'>We don't want you to be worried about the word 'disbursements' - it's just an everyday legal term used to describe out of pocket expenses and all property transactions in Australia will incur some of these.</p>

      <p class='text-sm font-normal mb-4'>We'll always be upfront about your conveyancing costs, so as soon as you ask us to help you, we can provide you with an estimate of how much your disbursements are likely to be.</p>
      
      <p class='text-sm font-normal'>These out of pocket costs all depend on the type of property you have bought or sold and where that property is located.</p>`,
  },
  {
    title: 'What types of conveyancing does Settle Easy do?',
    description: `<p class='text-sm font-normal mb-4'>Our experienced team specialize in all types of conveyancing including:</p>
    <ul class='list-disc pl-7 text-sm'>
      <li>residential properties</li>

      <li>large scale off the plan property developments</li>
    
      <li>retirement village residences</li>
    
      <li>commercial properties</li>
    
      <li>properties within trust structures</li>
    </ul>`,
  },
  {
    title: "How will I know what's happening?",
    description: `<p class='text-sm font-normal mb-4'>At Settle Easy, we are committed to keeping you updated every step of the way.</p>

      <p class='text-sm font-normal'>As a registered customer, you will be able to track each stage of your transaction and you will have a dedicated conveyancer to guide you through the process and answer any questions you may have.</p>`,
  },
];

export const TESTIMONIALS: ICard[] = [
  {
    rating: 5,
    duration: '4 weeks ago',
    description:
      'Marie was excellent, very prompt, clear and friendly. Would recommend for first home buyers who want to be kept in the loop and shown all the steps.',
    name: 'Jake Curtia',
  },
  {
    rating: 5,
    duration: '2 weeks ago',
    description:
      "We were fortunate enough to have Carley from Settle Easy help us with our first home purchase. We feel incredibly lucky that we had her to explain the different parts of the process and answer the many questions we had. We said to one another multiple times 'Thank god for Carley, she's incredible.' It meant a lot that she was so forward with getting details, and advocating for us with the sellers and always keeping us up to date with what was happening. We can't thank her enough for everything she did for us.",
    name: 'Brendan Freeman',
  },
  {
    rating: 5,
    duration: '2 weeks ago',
    description:
      "We are first time property buyers and were buying a block of land - Carley from Settle Easy was absolutely amazing from start to finish. She went above and beyond at every single stage of the process, keeping us in the loop the entire time, explaining what she was doing and why, making sure we understood what was happening. Buying a property is stressful enough, you don't need the extra worry of a Conveyancer that needs constant chasing. Incredible service!",
    name: 'Emma Gerta',
  },
];
