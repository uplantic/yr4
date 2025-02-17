import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is Asteroid 2024 YR4?",
    answer:
      "Asteroid 2024 YR4 is a near-Earth object (NEO) discovered on December 27, 2024, in Chile. It has attracted attention because of its relatively high initial impact probability for a possible collision with Earth.",
  },
  {
    question: "When could it potentially impact Earth?",
    answer: "Current calculations point to a possible impact date of December 22, 2032. However, this date may shift as astronomers refine the asteroid’s orbit with new observations.",
  },
  {
    question: "How likely is an impact?",
    answer: "Current estimates range between a 1% and 2% probability of collision. These figures are subject to change as more data becomes available and orbital calculations improve.",
  },
  {
    question: "How large is 2024 YR4?",
    answer:
      "Its size is estimated to be between 40 and 100 meters (130–330 feet) in diameter. Observations often focus on a 60-meter (196-foot) midpoint, but reflectivity uncertainties make exact measurements challenging.",
  },
  {
    question: "How dangerous could it be if it hits Earth?",
    answer: "An asteroid of this size could cause significant local or regional damage. Impact effects range from an airburst, like the 1908 Tunguska event, to a crater-forming collision.",
  },
  {
    question: "Why does the James Webb Space Telescope matter for studying it?",
    answer:
      "James Webb observes in the infrared spectrum, measuring the heat emitted by the asteroid. This method allows for far more accurate size and composition estimates than visible-light observations alone.",
  },
  {
    question: "What is the current approach distance if it misses Earth?",
    answer: "Some calculations place the closest approach at around 66,000 miles (106,200 km) from Earth, though the exact distance remains uncertain and could be revised with new data.",
  },
  {
    question: "Why do scientists say the risk may still drop?",
    answer:
      "Historically, newly discovered asteroids often appear more threatening due to limited initial data. As more observations come in, orbital paths are refined and impact probabilities typically decrease.",
  },
  {
    question: "Has any asteroid ever reached a higher risk level than 2024 YR4?",
    answer:
      "Yes. Asteroid (99942) Apophis reached Torino Scale Level 4 shortly after its discovery in 2004, but has since been downgraded to no risk. Asteroid 2024 YR4 is currently rated at Level 3.",
  },
  {
    question: "What is the Torino Scale?",
    answer:
      "The Torino Scale classifies the impact hazard of near-Earth objects on a scale from 0 to 10. A Level 3 designation means the asteroid merits close attention by both the scientific community and the public.",
  },
  {
    question: "What role does the ESA play?",
    answer:
      "The European Space Agency (ESA) operates the NEO Coordination Centre in Italy, collaborating with global partners to track risky asteroids, refine impact probabilities, and plan potential defense measures.",
  },
  {
    question: "Why is there a 'risk corridor'?",
    answer:
      "The term 'risk corridor' refers to potential impact locations based on current orbital uncertainties. For 2024 YR4, the corridor spans regions such as South America, Africa, the Atlantic, and parts of Asia.",
  },
  {
    question: "Will 2024 YR4 be observable again before 2032?",
    answer:
      "Yes. Scientists expect another close approach in 2028, which should provide opportunities for improved radar and telescopic observations to refine its orbit and physical characteristics.",
  },
  {
    question: "How do we defend against a potential asteroid impact?",
    answer:
      "Planetary defense strategies involve detection, tracking, and — if needed — missions to deflect or disrupt hazardous asteroids (e.g., NASA’s DART and ESA’s Hera). Adequate lead time is crucial.",
  },
  {
    question: "Should the public be worried?",
    answer:
      "Experts advise staying informed but not alarmed. While the asteroid’s initial risk is higher than usual, most scenarios predict a miss. Ongoing observation campaigns aim to confirm that an impact is unlikely.",
  },
];

const FaqSection = () => {
  return (
    <div className="" id="faqs">
      <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto divide-y max-w-7xl divide-stone-200/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-stone-100">Frequently Asked Questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-stone-200/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex items-start justify-between w-full text-left text-stone-100">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="flex items-center ml-6 h-7">{open ? <MinusIcon className="w-6 h-6" aria-hidden="true" /> : <PlusIcon className="w-6 h-6" aria-hidden="true" />}</span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="pr-12 mt-2 mb-2">
                      <p className="text-base leading-7 text-stone-300" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
