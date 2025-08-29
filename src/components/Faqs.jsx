import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
function Faqs() {
    const faqs = [
        {
            "question": "What is Chill Game?",
            "answer": "Chill Game is a curated platform for casual and relaxing games, designed for gamers who want to unwind and enjoy laid-back experiences. It brings together a collection of low-stress games with calming visuals, gentle gameplay, and soothing soundtracks."
        },
        {
            "question": "What types of games are available on Chill Game?",
            "answer": "Chill Game offers a wide variety of genres focused on relaxation, including simulation, puzzle, exploration, farming, and narrative-driven games. Titles range from indie favorites to lesser-known gems, all selected for their relaxing nature."
        },
        {
            "question": "Is Chill Game free to use?",
            "answer": "Yes, Chill Game is completely free to browse and explore. While some games may require a purchase or subscription from third-party platforms, accessing game lists, recommendations, and user reviews on Chill Game doesn’t cost anything."
        },
        {
            "question": "Can I create a personalized game list?",
            "answer": "Absolutely! Users can sign up and create a personalized collection of favorite chill games. This makes it easy to keep track of what you've played, what you love, and what you'd like to try next."
        },
        {
            "question": "Are the games verified or reviewed?",
            "answer": "Yes, each game featured on Chill Game is carefully reviewed by our team to ensure it aligns with our 'chill' philosophy. We prioritize quality, user feedback, and overall relaxing experience to ensure you get exactly what you're looking for."
        }
    ];
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);
    return (
        <section id="faq" className=" max-w-9xl  mx-auto px-4 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-center py-2">Frequently Asked Questions</h2>
            <Accordion data-aos="zoom-in" className="space-y-4 ">
                {faqs.map((faq, idx) => (
                    <AccordionItem

                        key={idx}
                        header={
                            <div className="flex rounded-lg justify-between items-center w-full text-left font-medium text-lg text-black">
                                {faq.question}
                                <ChevronDown className="ml-2 shrink-0 transition-transform duration-200 accordion-chevron text-blue-500" />
                            </div>
                        }
                        className=" rounded-t-lg overflow-hidden"
                        contentProps={{
                            className: "p-4 text-black ",
                        }}
                        buttonProps={{
                            className:
                                "w-full  px-4 py-3 text-left border-t-2 border-l-2 border-r-2 focus:outline-none focus:ring-2  rounded-t-lg",
                        }}
                        contentTransition>

                        {faq.answer}
                    </AccordionItem>
                ))}
            </Accordion>

            <style jsx>{`
        .szh-accordion__item--expanded .accordion-chevron {
          transform: rotate(180deg);
         
        }
      `}</style>
        </section>

    );
}

export default Faqs;