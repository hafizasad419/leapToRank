import Services from "../../Services";
import InsightsSection from "./InsightsSection";
import ResultOriented from "./ResultOriented";
import ServicesSection from "./ServicesSection";
import WhatWeDo from "./WhatWeDo";
import WorkingWithUs from "./WorkingWithUs";



const MiddleSection = () => {
    return (
        <section
        id="middle-section"
        >
            <WhatWeDo />
            <ResultOriented />
            <ServicesSection />
            <WorkingWithUs />
            <InsightsSection />
        </section>
    );
};

export default MiddleSection;