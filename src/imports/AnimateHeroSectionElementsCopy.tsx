import svgPaths from "./svg-uvy2d2mnee";
import imgImagePrimiyasArtAcademy from "../assets/4307a49e690f6e0d5b4cc3f5e241fcaa2617c523.png";
import imgBrushStrokeAboutUs32 from "../assets/d989d402aa173543be3f24e3f28b674dc1fff85e.png";
import imgBrushStrokeAboutUs21 from "../assets/83ce4f2baa1b753c349e19b31d6d52f5f5c6a3f6.png";
import imgPrimiyaAboutPhoto1 from "../assets/ee1fca0c7d7699b7ef50155560fabf3cdd6b17a7.png";
import imgBrushStroke1 from "../assets/2f11d2ca8e43ac3af786a4d36a6476912ed710a3.png";
import imgBrushStrokeAboutUs41 from "../assets/9f7d9933a0b27e7e3384b71c2ce6becc718950dd.png";
import imgImage from "../assets/267698921917187a8c7b48052763446f125148e1.png";
import { motion } from "motion/react";

function Container() {
    return (
        <motion.div
            className="[grid-area:3_/_1] bg-[#fff5f0] box-border content-stretch flex gap-[16px] items-start pb-px pl-[25px] pr-px pt-[25px] relative rounded-[20px] self-stretch shrink-0 w-[513px] cursor-pointer"
            data-name="Container"
            whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: "0px 12px 24px -4px rgba(255, 133, 89, 0.15), 0px 4px 8px -2px rgba(255, 133, 89, 0.08)"
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div aria-hidden="true" className="absolute border border-[#ff8559] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <div className="h-[48px] relative shrink-0 w-[32px]" data-name="AboutUs">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[32px]">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-0 not-italic text-[32px] text-neutral-950 text-nowrap top-0 tracking-[0.4063px] whitespace-pre">❤️</p>
                </div>
            </div>
            <div className="h-[32px] relative shrink-0 w-[372.234px]" data-name="AboutUs">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[372.234px]">
                    <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[18px] text-nowrap top-[8.5px] whitespace-pre">Strengthen emotional awareness and empathy</p>
                </div>
            </div>
        </motion.div>
    );
}

function Heading() {
    return (
        <div className="absolute h-[132px] left-0 top-[40px] w-[864px]" data-name="Heading 1">
            <p className="absolute font-['Momo_Trust_Display:Regular',sans-serif] leading-[132px] left-[432.17px] not-italic text-[#101828] text-[88px] text-center text-nowrap top-[13.5px] translate-x-[-50%] whitespace-pre">{`About Primiya's Art`}</p>
        </div>
    );
}

function Paragraph() {
    return (
        <div className="absolute h-[76px] left-0 top-[144px] w-[864px]" data-name="Paragraph">
            <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[38px] left-[calc(50%+0.5px)] text-[#4a5565] text-[22px] text-center top-[29.5px] translate-x-[-50%] w-[975px]">{`Founded by artist and educator Primiya, Primiya's Art began as a modest community workshop with a bunch of curious young minds and a handful of brushes.`}</p>
        </div>
    );
}

function Container1() {
    return <div className="absolute bg-[#ff8559] h-[3px] left-[382px] rounded-[1.67772e+07px] top-[260px] w-[100px]" data-name="Container" />;
}

function Container2() {
    return (
        <div className="absolute h-[223px] left-[432px] top-[138.5px] w-[864px]" data-name="Container">
            <Heading />
            <Paragraph />
            <Container1 />
        </div>
    );
}

function ImagePrimiyasArtAcademy() {
    return (
        <div className="absolute h-[74px] left-[54px] top-[44px] w-[341px]" data-name="Image (Primiya's Art Academy)">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagePrimiyasArtAcademy} />
        </div>
    );
}

function ButtonNav() {
    return (
        <motion.div
            className="absolute h-[24px] left-[0.6px] top-[7.5px] w-[43.797px] cursor-pointer"
            data-name="ButtonNav"
            onClick={() => (window as any).navigateTo?.("home")}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
        >
            <motion.p
                className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[22.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre"
                whileHover={{ scale: 1.05, color: "#101828" }}
                transition={{ duration: 0.2 }}
            >
                Home
            </motion.p>
        </motion.div>
    );
}

function Paragraph1() {
    return (
        <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Programs</p>
        </div>
    );
}

function LinkNav() {
    return (
        <motion.div
            className="absolute box-border content-stretch flex flex-col h-[24px] items-start left-[75.14px] pb-0 pl-0 top-[8px] w-[69.938px] cursor-pointer"
            data-name="LinkNav"
            onClick={() => (window as any).navigateTo?.("programs")}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="h-[24px] relative shrink-0 w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <motion.p
                    className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre"
                    whileHover={{ color: "#101828" }}
                    transition={{ duration: 0.2 }}
                >
                    Programs
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

function LinkNav1() {
    return (
        <motion.div
            className="absolute h-[24px] left-[177.48px] top-[7.5px] w-[66.188px] cursor-pointer"
            data-name="LinkNav2"
            onClick={() => (window as any).navigateTo?.("products")}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
        >
            <motion.p
                className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[33.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre"
                whileHover={{ scale: 1.05, color: "#101828" }}
                transition={{ duration: 0.2 }}
            >
                Products
            </motion.p>
        </motion.div>
    );
}

function Paragraph2() {
    return (
        <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Testimonials</p>
        </div>
    );
}

function LinkNav2() {
    return (
        <motion.div
            className="absolute box-border content-stretch flex flex-col h-[24px] items-start left-[274.35px] pb-0 pl-0 top-[8px] w-[89.938px] cursor-pointer"
            data-name="LinkNav3"
            onClick={() => (window as any).navigateTo?.("testimonials")}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="h-[24px] relative shrink-0 w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <motion.p
                    className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre"
                    whileHover={{ color: "#101828" }}
                    transition={{ duration: 0.2 }}
                >
                    Testimonials
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

function Paragraph3() {
    return (
        <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">About Us</p>
        </div>
    );
}

function LinkNav3() {
    return (
        <div className="absolute box-border content-stretch flex flex-col h-[24px] items-start left-[396.29px] pb-0 pl-0 top-[8px] w-[67.383px]" data-name="LinkNav4">
            <Paragraph3 />
        </div>
    );
}

function Navigation() {
    return (
        <div className="absolute h-[40px] left-[1067px] top-[47px] w-[521.359px]" data-name="Navigation">
            <ButtonNav />
            <LinkNav />
            <LinkNav1 />
            <LinkNav2 />
            <LinkNav3 />
        </div>
    );
}

function Section() {
    return (
        <div className="absolute bg-white h-[500px] left-0 overflow-clip top-0 w-[1728px]" data-name="Section">
            <Container2 />
            <ImagePrimiyasArtAcademy />
            <Navigation />
            <div className="absolute flex h-[564.364px] items-center justify-center left-[1361.13px] top-[-257.83px] w-[661.541px]" style={{ "--transform-inner-width": "607.578125", "--transform-inner-height": "278.84375" } as React.CSSProperties}>
                <div className="flex-none rotate-[147.066deg]">
                    <div className="h-[278.849px] opacity-[0.58] relative w-[607.579px]" data-name="Brush Stroke about us 3 2">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrushStrokeAboutUs32} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function AboutUs() {
    return (
        <div className="absolute font-['Momo_Trust_Display:Regular',sans-serif] h-[120px] leading-[60px] left-0 not-italic text-[#101828] text-[52px] text-nowrap top-0 w-[856px] whitespace-pre" data-name="AboutUs">
            <p className="absolute left-0 top-[4px]">The Artist Behind</p>
            <p className="absolute left-0 top-[64px]">the Vision</p>
        </div>
    );
}

function AboutUs1() {
    return (
        <div className="absolute h-[64px] left-0 top-[144px] w-[856px]" data-name="AboutUs">
            <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#4a5565] text-[18px] top-[0.5px] w-[834px]">{`Primiya's journey began not with a gallery, but with a classroom. As both an artist and a teacher, she saw firsthand how art could unlock a child's imagination, build resilience, and foster emotional intelligence.Her passion for nurturing creativity led her to create a space where children could not only learn techniques—but discover themselves. From sketching in notebooks to mentoring students, Primiya's philosophy has always been simple:`}</p>
        </div>
    );
}

function AboutUs2() {
    return (
        <div className="absolute h-[32px] left-0 top-[344px] w-[856px]" data-name="AboutUs">
            <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] left-0 text-[#f30d11] text-[20px] text-nowrap top-[-0.5px] whitespace-pre">{`"Art is not just a skill—it's a language of self-expression."`}</p>
        </div>
    );
}

function Container3() {
    return (
        <div className="absolute h-[376px] left-[264px] top-[96px] w-[1134.67px]" data-name="Container">
            <AboutUs />
            <AboutUs1 />
            <AboutUs2 />
        </div>
    );
}

function Section1() {
    return (
        <div className="absolute bg-gradient-to-r from-[#f8fade] from-[13.49%] h-[572px] left-0 to-[85.704%] to-[rgba(248,250,222,0)] top-[500px] w-[1364px]" data-name="Section">
            <Container3 />
            <div className="absolute flex h-[216.014px] items-center justify-center left-[1453px] top-[121px] w-[190.923px]" style={{ "--transform-inner-width": "86", "--transform-inner-height": "205" } as React.CSSProperties}>
                <div className="flex-none rotate-[143.574deg]">
                    <div className="h-[205px] opacity-[0.54] relative w-[86px]" data-name="Brush Stroke about us 2 1">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrushStrokeAboutUs21} />
                    </div>
                </div>
            </div>
            <div className="absolute flex h-[304.725px] items-center justify-center left-[1168px] top-[103px] w-[231.34px]" style={{ "--transform-inner-width": "277", "--transform-inner-height": "127" } as React.CSSProperties}>
                <div className="flex-none rotate-[245.239deg]">
                    <div className="h-[127px] relative w-[277px]" data-name="Brush Stroke about us 3 1">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrushStrokeAboutUs32} />
                    </div>
                </div>
            </div>
            <div className="absolute h-[526px] left-[1188px] top-[23px] w-[421px]" data-name="primiya about photo 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimiyaAboutPhoto1} />
            </div>
            <div className="absolute flex h-[338.704px] items-center justify-center left-[-90.35px] top-[-188.85px] w-[338.705px]" style={{ "--transform-inner-width": "240", "--transform-inner-height": "239" } as React.CSSProperties}>
                <div className="flex-none rotate-[44.962deg]">
                    <div className="h-[239px] relative w-[240px]" data-name="brush stroke 1">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrushStroke1} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Heading1() {
    return (
        <div className="absolute h-[78px] left-[264px] top-[96px] w-[1200px]" data-name="Heading 2">
            <p className="absolute font-['Momo_Trust_Display:Regular',sans-serif] leading-[78px] left-[600.3px] not-italic text-[#101828] text-[52px] text-center text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Our Mission</p>
        </div>
    );
}

function Paragraph4() {
    return (
        <div className="absolute h-[72px] left-[414px] top-[222px] w-[900px]" data-name="Paragraph">
            <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[36px] left-[450.11px] text-[#4a5565] text-[20px] text-center top-[0.5px] translate-x-[-50%] w-[900px]">{`At Primiya's Art, we believe that every child is an artist waiting to be heard. Our mission is to provide a nurturing, inclusive environment where children can:`}</p>
        </div>
    );
}

function AboutUs3() {
    return (
        <div className="h-[48px] relative shrink-0 w-[32px]" data-name="AboutUs">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[32px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-0 not-italic text-[32px] text-neutral-950 text-nowrap top-0 tracking-[0.4063px] whitespace-pre">🎨</p>
            </div>
        </div>
    );
}

function AboutUs4() {
    return (
        <div className="h-[32px] relative shrink-0 w-[226.086px]" data-name="AboutUs">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[226.086px]">
                <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[28px] left-0 text-[#4a5565] text-[18px] text-nowrap top-[9.5px] whitespace-pre">Explore their creativity freely</p>
            </div>
        </div>
    );
}

function Container4() {
    return (
        <motion.div
            className="[grid-area:1_/_1] bg-[#fff5f0] box-border content-stretch flex gap-[16px] items-start pb-px pl-[25px] pr-px pt-[25px] relative rounded-[20px] self-stretch shrink-0 w-[513px] cursor-pointer"
            data-name="Container"
            whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: "0px 12px 24px -4px rgba(255, 133, 89, 0.15), 0px 4px 8px -2px rgba(255, 133, 89, 0.08)"
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div aria-hidden="true" className="absolute border border-[#ff8559] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <AboutUs3 />
            <AboutUs4 />
        </motion.div>
    );
}

function AboutUs5() {
    return (
        <div className="h-[48px] relative shrink-0 w-[32px]" data-name="AboutUs">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[32px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-0 not-italic text-[32px] text-neutral-950 text-nowrap top-0 tracking-[0.4063px] whitespace-pre">✏️</p>
            </div>
        </div>
    );
}

function AboutUs6() {
    return (
        <div className="h-[32px] relative shrink-0 w-[303.086px]" data-name="AboutUs">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[303.086px]">
                <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[18px] text-nowrap top-[9.5px] whitespace-pre">Develop artistic skills across mediums</p>
            </div>
        </div>
    );
}

function Container5() {
    return (
        <motion.div
            className="[grid-area:1_/_2] bg-[#f9ffed] box-border content-stretch flex gap-[16px] items-start pb-px pl-[25px] pr-px pt-[25px] relative rounded-[20px] self-stretch shrink-0 w-[513px] cursor-pointer"
            data-name="Container"
            whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: "0px 12px 24px -4px rgba(209, 226, 49, 0.15), 0px 4px 8px -2px rgba(209, 226, 49, 0.08)"
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div aria-hidden="true" className="absolute border border-[#a0b009] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <AboutUs5 />
            <AboutUs6 />
        </motion.div>
    );
}

function AboutUs7() {
    return (
        <div className="h-[48px] relative shrink-0 w-[32px]" data-name="AboutUs">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[32px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-0 not-italic text-[32px] text-neutral-950 text-nowrap top-0 tracking-[0.4063px] whitespace-pre">💪</p>
            </div>
        </div>
    );
}

function AboutUs8() {
    return (
        <div className="h-[32px] relative shrink-0 w-[324.195px]" data-name="AboutUs">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[324.195px]">
                <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[28px] left-0 text-[#4a5565] text-[18px] text-nowrap top-[calc(50%-6px)] whitespace-pre">Build confidence through self-expression</p>
            </div>
        </div>
    );
}

function Container6() {
    return (
        <motion.div
            className="[grid-area:2_/_1] bg-[#fff5f0] box-border content-stretch flex gap-[16px] items-start pb-px pl-[25px] pr-px pt-[25px] relative rounded-[20px] self-stretch shrink-0 w-[513px] cursor-pointer"
            data-name="Container"
            whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: "0px 12px 24px -4px rgba(255, 133, 89, 0.15), 0px 4px 8px -2px rgba(255, 133, 89, 0.08)"
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div aria-hidden="true" className="absolute border border-[#ff8559] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <AboutUs7 />
            <AboutUs8 />
        </motion.div>
    );
}

function AboutUs9() {
    return (
        <div className="h-[48px] relative shrink-0 w-[32px]" data-name="AboutUs">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[32px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-0 not-italic text-[32px] text-neutral-950 text-nowrap top-0 tracking-[0.4063px] whitespace-pre">🧠</p>
            </div>
        </div>
    );
}

function AboutUs10() {
    return (
        <div className="h-[32px] relative shrink-0 w-[360.172px]" data-name="AboutUs">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[360.172px]">
                <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[18px] text-nowrap top-[9.5px] whitespace-pre">Cultivate critical thinking and problem-solving</p>
            </div>
        </div>
    );
}

function Container7() {
    return (
        <motion.div
            className="[grid-area:2_/_2] bg-[#f9ffed] box-border content-stretch flex gap-[16px] items-start pb-px pl-[25px] pr-px pt-[25px] relative rounded-[20px] self-stretch shrink-0 w-[513px] cursor-pointer"
            data-name="Container"
            whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: "0px 12px 24px -4px rgba(209, 226, 49, 0.15), 0px 4px 8px -2px rgba(209, 226, 49, 0.08)"
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div aria-hidden="true" className="absolute border border-[#a0b009] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <AboutUs9 />
            <AboutUs10 />
        </motion.div>
    );
}

function AboutUs11() {
    return (
        <div className="h-[48px] relative shrink-0 w-[32px]" data-name="AboutUs">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[32px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-0 not-italic text-[32px] text-neutral-950 text-nowrap top-0 tracking-[0.4063px] whitespace-pre">🖌️</p>
            </div>
        </div>
    );
}

function AboutUs12() {
    return (
        <div className="h-[32px] relative shrink-0 w-[266.125px]" data-name="AboutUs">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[266.125px]">
                <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[18px] text-nowrap top-[9.5px] whitespace-pre">Express themselves authentically</p>
            </div>
        </div>
    );
}

function Container9() {
    return (
        <motion.div
            className="[grid-area:3_/_2] bg-[#f9ffed] box-border content-stretch flex gap-[16px] items-start pb-px pl-[25px] pr-px pt-[25px] relative rounded-[20px] self-stretch shrink-0 w-[513px] cursor-pointer"
            data-name="Container"
            whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: "0px 12px 24px -4px rgba(209, 226, 49, 0.15), 0px 4px 8px -2px rgba(209, 226, 49, 0.08)"
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div aria-hidden="true" className="absolute border border-[#a0b009] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <AboutUs11 />
            <AboutUs12 />
        </motion.div>
    );
}

function Container10() {
    return (
        <div className="absolute gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[364px] left-1/2 top-[342px] translate-x-[-50%] w-[1116px]" data-name="Container">
            <Container4 />
            <Container5 />
            <Container6 />
            <Container7 />
            <Container />
            <Container9 />
        </div>
    );
}

function Section2() {
    return (
        <div className="absolute bg-white h-[802px] left-0 top-[1072px] w-[1728px]" data-name="Section">
            <Heading1 />
            <Paragraph4 />
            <Container10 />
        </div>
    );
}

function Heading3() {
    return (
        <div className="absolute h-[78px] left-0 top-0 w-[1200px]" data-name="Heading 2">
            <p className="absolute font-['Momo_Trust_Display:Regular',sans-serif] leading-[78px] left-[599.99px] not-italic text-[#101828] text-[52px] text-center text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">What We Offer</p>
            <div className="absolute h-[312px] left-1/2 top-[203px] translate-x-[-50%] w-[1544px]" data-name="Brush Stroke about us 4 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrushStrokeAboutUs41} />
            </div>
        </div>
    );
}

function Paragraph5() {
    return (
        <div className="absolute h-[72px] left-[150px] top-[126px] w-[900px]" data-name="Paragraph">
            <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[36px] left-[450.33px] text-[#4a5565] text-[20px] text-center top-[0.5px] translate-x-[-50%] w-[826px]">{`Whether it's painting, drawing, mixed media, or digital art, our programs are designed to meet children where they are—and help them grow.`}</p>
        </div>
    );
}

function Text() {
    return (
        <div className="h-[42px] relative shrink-0 w-[28px]" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] relative w-[28px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[14px] not-italic text-[28px] text-center text-neutral-950 text-nowrap top-[0.5px] tracking-[0.3828px] translate-x-[-50%] whitespace-pre">📅</p>
            </div>
        </div>
    );
}

function AboutUs13() {
    return (
        <div className="absolute bg-[#ff8559] content-stretch flex items-center justify-center left-[109px] rounded-[1.67772e+07px] size-[64px] top-[32px]" data-name="AboutUs">
            <Text />
        </div>
    );
}

function AboutUs14() {
    return (
        <div className="absolute h-[30px] left-[32px] top-[112px] w-[218px]" data-name="AboutUs">
            <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[30px] left-[109.63px] text-[#101828] text-[20px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">Weekly Classes</p>
        </div>
    );
}

function AboutUs15() {
    return (
        <div className="absolute h-[24px] left-[32px] top-[150px] w-[218px]" data-name="AboutUs">
            <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-[109.24px] text-[#4a5565] text-[16px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Ages 4–16</p>
        </div>
    );
}

function Container11() {
    return (
        <motion.div
            className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[24px] shrink-0 cursor-pointer"
            data-name="Container"
            whileHover={{
                scale: 1.04,
                y: -6,
                boxShadow: "0px 16px 32px -6px rgba(255, 133, 89, 0.2), 0px 6px 12px -3px rgba(255, 133, 89, 0.12)"
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div aria-hidden="true" className="absolute border border-[#ff8559] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
            <AboutUs13 />
            <AboutUs14 />
            <AboutUs15 />
        </motion.div>
    );
}

function Text1() {
    return (
        <div className="h-[42px] relative shrink-0 w-[28px]" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] relative w-[28px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[14px] not-italic text-[28px] text-center text-neutral-950 text-nowrap top-[0.5px] tracking-[0.3828px] translate-x-[-50%] whitespace-pre">🎉</p>
            </div>
        </div>
    );
}

function AboutUs16() {
    return (
        <div className="absolute bg-[#d1e231] content-stretch flex items-center justify-center left-[109px] rounded-[1.67772e+07px] size-[64px] top-[32px]" data-name="AboutUs">
            <Text1 />
        </div>
    );
}

function AboutUs17() {
    return (
        <div className="absolute h-[30px] left-[32px] top-[112px] w-[218px]" data-name="AboutUs">
            <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[30px] left-[109.38px] text-[#101828] text-[20px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">Holiday Workshops</p>
        </div>
    );
}

function AboutUs18() {
    return (
        <div className="absolute h-[24px] left-[32px] top-[150px] w-[218px]" data-name="AboutUs">
            <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-[108.63px] text-[#4a5565] text-[16px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Seasonal programs</p>
        </div>
    );
}

function Container12() {
    return (
        <motion.div
            className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[24px] shrink-0 cursor-pointer"
            data-name="Container"
            whileHover={{
                scale: 1.04,
                y: -6,
                boxShadow: "0px 16px 32px -6px rgba(209, 226, 49, 0.2), 0px 6px 12px -3px rgba(209, 226, 49, 0.12)"
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div aria-hidden="true" className="absolute border border-[#a0b009] border-solid inset-[-0.5px] pointer-events-none rounded-[24.5px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
            <AboutUs16 />
            <AboutUs17 />
            <AboutUs18 />
        </motion.div>
    );
}

function Text2() {
    return (
        <div className="h-[42px] relative shrink-0 w-[28px]" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] relative w-[28px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[14.5px] not-italic text-[28px] text-center text-neutral-950 text-nowrap top-[0.5px] tracking-[0.3828px] translate-x-[-50%] whitespace-pre">☀️</p>
            </div>
        </div>
    );
}

function AboutUs19() {
    return (
        <div className="absolute bg-[#ff8559] content-stretch flex items-center justify-center left-[109px] rounded-[1.67772e+07px] size-[64px] top-[32px]" data-name="AboutUs">
            <Text2 />
        </div>
    );
}

function AboutUs20() {
    return (
        <div className="absolute h-[30px] left-[32px] top-[112px] w-[218px]" data-name="AboutUs">
            <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[30px] left-[109.45px] text-[#101828] text-[20px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">Summer Camps</p>
        </div>
    );
}

function AboutUs21() {
    return (
        <div className="absolute h-[24px] left-[32px] top-[150px] w-[218px]" data-name="AboutUs">
            <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-[109.13px] text-[#4a5565] text-[16px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Intensive sessions</p>
        </div>
    );
}

function Container13() {
    return (
        <motion.div
            className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[24px] shrink-0 cursor-pointer"
            data-name="Container"
            whileHover={{
                scale: 1.04,
                y: -6,
                boxShadow: "0px 16px 32px -6px rgba(255, 133, 89, 0.2), 0px 6px 12px -3px rgba(255, 133, 89, 0.12)"
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div aria-hidden="true" className="absolute border border-[#ff8559] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
            <AboutUs19 />
            <AboutUs20 />
            <AboutUs21 />
        </motion.div>
    );
}

function Text3() {
    return (
        <div className="h-[42px] relative shrink-0 w-[28px]" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] relative w-[28px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[14px] not-italic text-[28px] text-center text-neutral-950 text-nowrap top-[0.5px] tracking-[0.3828px] translate-x-[-50%] whitespace-pre">🎨</p>
            </div>
        </div>
    );
}

function AboutUs22() {
    return (
        <div className="absolute bg-[#d1e231] content-stretch flex items-center justify-center left-[109px] rounded-[1.67772e+07px] size-[64px] top-[32px]" data-name="AboutUs">
            <Text3 />
        </div>
    );
}

function AboutUs23() {
    return (
        <div className="absolute h-[60px] left-[32px] top-[112px] w-[218px]" data-name="AboutUs">
            <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[30px] left-[118px] text-[#101828] text-[20px] text-center top-[-1px] translate-x-[-50%] w-[156px]">Portfolio Development</p>
        </div>
    );
}

function AboutUs24() {
    return (
        <div className="absolute h-[24px] left-[32px] top-[180px] w-[218px]" data-name="AboutUs">
            <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-[108.87px] text-[#4a5565] text-[16px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">for aspiring artists</p>
        </div>
    );
}

function Container14() {
    return (
        <motion.div
            className="[grid-area:1_/_4] bg-white place-self-stretch relative rounded-[24px] shrink-0 cursor-pointer"
            data-name="Container"
            whileHover={{
                scale: 1.04,
                y: -6,
                boxShadow: "0px 16px 32px -6px rgba(209, 226, 49, 0.2), 0px 6px 12px -3px rgba(209, 226, 49, 0.12)"
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div aria-hidden="true" className="absolute border border-[#a0b009] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
            <AboutUs22 />
            <AboutUs23 />
            <AboutUs24 />
        </motion.div>
    );
}

function Container15() {
    return (
        <div className="absolute gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[240px] left-0 top-[262px] w-[1200px]" data-name="Container">
            <Container11 />
            <Container12 />
            <Container13 />
            <Container14 />
        </div>
    );
}

function Paragraph6() {
    return (
        <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[36px] left-[560.76px] text-[24px] text-center text-nowrap text-white top-[-0.5px] translate-x-[-50%] whitespace-pre">{`Plus: Community Art Events & Exhibitions! 🌟`}</p>
        </div>
    );
}

function Paragraph8() {
    return (
        <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[27px] left-[560.19px] text-[18px] text-[rgba(255,255,255,0.9)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">{`Showcasing our young artists' incredible work`}</p>
        </div>
    );
}

function AboutUs25() {
    return (
        <div className="content-stretch flex flex-col gap-[8px] h-[71px] items-start relative shrink-0 w-full" data-name="AboutUs">
            <Paragraph6 />
            <Paragraph8 />
        </div>
    );
}

function Container16() {
    return (
        <div className="absolute bg-[#ff8559] box-border content-stretch flex flex-col h-[151px] items-start left-0 overflow-clip pb-0 pt-[40px] px-[40px] rounded-[28px] top-[550px] w-[1200px]" data-name="Container">
            <AboutUs25 />
        </div>
    );
}

function Container17() {
    return (
        <div className="absolute h-[701px] left-[264px] top-[96px] w-[1200px]" data-name="Container">
            <Heading3 />
            <Paragraph5 />
            <Container15 />
            <Container16 />
        </div>
    );
}

function Section3() {
    return (
        <div className="absolute bg-gradient-to-b from-[#ffffff] h-[893px] left-0 to-[#fff5f0] top-[1874px] w-[1728px]" data-name="Section">
            <Container17 />
        </div>
    );
}

function Heading4() {
    return (
        <div className="h-[96px] relative shrink-0 w-full" data-name="Heading 2">
            <p className="absolute font-['Momo_Trust_Display:Regular',sans-serif] leading-[96px] left-[499.75px] not-italic text-[#101828] text-[64px] text-center text-nowrap top-[9px] translate-x-[-50%] whitespace-pre">Why It Matters</p>
        </div>
    );
}

function Paragraph9() {
    return (
        <div className="h-[76px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[38px] left-[500.45px] text-[22px] text-center text-neutral-950 top-[-10px] translate-x-[-50%] w-[984px]">{`Art education isn't just about creating beautiful things. It's about building creative thinkers, empathetic leaders, and confident individuals.`}</p>
        </div>
    );
}

function Paragraph10() {
    return (
        <div className="h-[38px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[38px] left-[500.67px] text-[#ff8559] text-[26px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">{`At Primiya's Art, we're proud to be part of that journey.`}</p>
        </div>
    );
}

function Section4() {
    return (
        <div className="absolute bg-[#fff6f1] box-border content-stretch flex flex-col gap-[32px] h-[482px] items-start left-0 pb-0 pt-[96px] px-[364px] top-[2767px] w-[1728px]" data-name="Section">
            <Heading4 />
            <Paragraph9 />
            <Paragraph10 />
        </div>
    );
}

function Heading5() {
    return (
        <div className="absolute h-[84px] left-0 top-0 w-[800px]" data-name="Heading 2">
            <p className="absolute font-['Momo_Trust_Display:Regular',sans-serif] leading-[84px] left-[399.84px] not-italic text-[#101828] text-[56px] text-center text-nowrap top-[8.5px] translate-x-[-50%] whitespace-pre">Ready to Start Creating?</p>
        </div>
    );
}

function Paragraph11() {
    return (
        <div className="absolute h-[32px] left-0 top-[108px] w-[800px]" data-name="Paragraph">
            <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[32px] left-[400.11px] text-[#4a5565] text-[20px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">{`Join our creative community and watch your child's artistic journey unfold.`}</p>
        </div>
    );
}

function Button() {
    return (
        <motion.div
            className="absolute bg-[#d1e231] h-[67px] left-[259.12px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[180px] w-[281.758px] cursor-pointer"
            data-name="Button"
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 16px 24px -4px rgba(209, 226, 49, 0.25), 0px 8px 12px -6px rgba(209, 226, 49, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-[141px] not-italic text-[18px] text-center text-nowrap text-black top-[20.5px] translate-x-[-50%] whitespace-pre">Explore Our Programs</p>
        </motion.div>
    );
}

function Container18() {
    return (
        <div className="h-[247px] relative shrink-0 w-full" data-name="Container">
            <Heading5 />
            <Paragraph11 />
            <Button />
        </div>
    );
}

function Section5() {
    return (
        <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#fff5f0] h-[407px] items-start left-0 pb-0 pt-[80px] px-[464px] to-[#ffffff] top-[3249px] w-[1728px]" data-name="Section">
            <Container18 />
        </div>
    );
}

function Container19() {
    return <div className="absolute h-[42px] left-0 top-0 w-[191px]" data-name="Container" />;
}

function Image() {
    return (
        <div className="absolute h-[42px] left-0 top-0 w-[191px]" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
        </div>
    );
}

function Container8() {
    return (
        <div className="absolute h-[42px] left-0 top-[-1px] w-[191px]" data-name="Container9">
            <Container19 />
            <Image />
        </div>
    );
}

function Paragraph7() {
    return (
        <div className="absolute h-[72px] left-0 top-[55.5px] w-[235px]" data-name="Paragraph7">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] top-[-1px] tracking-[-0.3125px] w-[226px]">Nurturing creativity and artistic expression in young minds since 2008.</p>
        </div>
    );
}

function Container28() {
    return (
        <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container110">
            <Container8 />
            <Paragraph7 />
        </div>
    );
}

function Heading2() {
    return (
        <div className="absolute h-[24px] left-0 top-[-0.5px] w-[83.203px]" data-name="Heading3">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] tracking-[-0.3125px] whitespace-pre">Quick Links</p>
        </div>
    );
}

function Link() {
    return (
        <div className="absolute h-[24px] left-0 top-[2.5px] w-[67.641px]" data-name="Link4">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">About Us</p>
        </div>
    );
}

function Link1() {
    return (
        <div className="absolute h-[24px] left-0 top-[34.5px] w-[69.891px]" data-name="Link12">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Programs</p>
        </div>
    );
}

function Link2() {
    return (
        <div className="absolute h-[24px] left-0 top-[66.5px] w-[50.773px]" data-name="Link22">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Gallery</p>
        </div>
    );
}

function Link3() {
    return (
        <div className="absolute h-[24px] left-0 top-[98.5px] w-[57.953px]" data-name="Link32">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Contact</p>
        </div>
    );
}

function List() {
    return (
        <div className="absolute h-[120px] left-0 top-[40px] w-[272px]" data-name="List2">
            <Link />
            <Link1 />
            <Link2 />
            <Link3 />
        </div>
    );
}

function Container20() {
    return (
        <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container29">
            <Heading2 />
            <List />
        </div>
    );
}

function Heading6() {
    return (
        <div className="absolute h-[24px] left-0 top-[-0.5px] w-[57.953px]" data-name="Heading12">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] tracking-[-0.3125px] whitespace-pre">Contact</p>
        </div>
    );
}

function ListItem() {
    return (
        <div className="absolute h-[24px] left-0 top-[-0.5px] w-[101.219px]" data-name="ListItem42">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">123 Art Street</p>
        </div>
    );
}

function ListItem1() {
    return (
        <div className="absolute h-[24px] left-0 top-[31.5px] w-[131.438px]" data-name="ListItem52">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Seattle, WA 98101</p>
        </div>
    );
}

function ListItem2() {
    return (
        <div className="absolute h-[24px] left-0 top-[63.5px] w-[186.586px]" data-name="ListItem62">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">contact@primiyasart.com</p>
        </div>
    );
}

function ListItem3() {
    return (
        <div className="absolute h-[24px] left-0 top-[95.5px] w-[114.672px]" data-name="ListItem72">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">(555) 123-4567</p>
        </div>
    );
}

function List1() {
    return (
        <div className="absolute h-[120px] left-0 top-[40px] w-[272px]" data-name="List12">
            <ListItem />
            <ListItem1 />
            <ListItem2 />
            <ListItem3 />
        </div>
    );
}

function Container21() {
    return (
        <div className="[grid-area:1_/_3] place-self-stretch relative shrink-0" data-name="Container33">
            <Heading6 />
            <List1 />
        </div>
    );
}

function Heading7() {
    return (
        <div className="absolute h-[24px] left-0 top-[-0.5px] w-[70.055px]" data-name="Heading22">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] tracking-[-0.3125px] whitespace-pre">Follow Us</p>
        </div>
    );
}

function Icon() {
    return (
        <div className="absolute contents inset-[12.5%_8.33%]" data-name="Icon">
            <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-16.67%_-7.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
                        <path d={svgPaths.p18dfb480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
            <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector_2">
                <div className="absolute inset-[-12.92%_-33.37%_-12.92%_-33.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
                        <path d={svgPaths.p17cea200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
            <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector_3">
                <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 7">
                        <path d={svgPaths.p3b287f00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
            <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector_4">
                <div className="absolute inset-[-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                        <path d={svgPaths.p17bd4600} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

function Icon1() {
    return (
        <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
            <Icon />
        </div>
    );
}

function Icon6() {
    return (
        <div className="absolute content-stretch flex flex-col items-start left-[10px] size-[20px] top-[10px]" data-name="Icon18">
            <Icon1 />
        </div>
    );
}

function Container22() {
    return (
        <div className="absolute bg-[#1e2939] left-0 rounded-[1.67772e+07px] size-[40px] top-0" data-name="Container43">
            <Icon6 />
        </div>
    );
}

function Icon2() {
    return (
        <div className="absolute contents inset-[12.5%_8.33%]" data-name="Icon">
            <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-16.67%_-7.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
                        <path d={svgPaths.p18dfb480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
            <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector_2">
                <div className="absolute inset-[-12.92%_-33.37%_-12.92%_-33.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
                        <path d={svgPaths.p17cea200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
            <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector_3">
                <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 7">
                        <path d={svgPaths.p3b287f00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
            <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector_4">
                <div className="absolute inset-[-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                        <path d={svgPaths.p17bd4600} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

function Icon3() {
    return (
        <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
            <Icon2 />
        </div>
    );
}

function Icon7() {
    return (
        <div className="absolute content-stretch flex flex-col items-start left-[10px] size-[20px] top-[10px]" data-name="Icon26">
            <Icon3 />
        </div>
    );
}

function Container23() {
    return (
        <div className="absolute bg-[#1e2939] left-[56px] rounded-[1.67772e+07px] size-[40px] top-0" data-name="Container53">
            <Icon7 />
        </div>
    );
}

function Icon4() {
    return (
        <div className="absolute contents inset-[12.5%_8.33%]" data-name="Icon">
            <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-16.67%_-7.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
                        <path d={svgPaths.p18dfb480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
            <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector_2">
                <div className="absolute inset-[-12.92%_-33.37%_-12.92%_-33.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
                        <path d={svgPaths.p17cea200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
            <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector_3">
                <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 7">
                        <path d={svgPaths.p3b287f00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
            <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector_4">
                <div className="absolute inset-[-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                        <path d={svgPaths.p17bd4600} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

function Icon5() {
    return (
        <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
            <Icon4 />
        </div>
    );
}

function Icon8() {
    return (
        <div className="absolute content-stretch flex flex-col items-start left-[10px] size-[20px] top-[10px]" data-name="Icon34">
            <Icon5 />
        </div>
    );
}

function Container24() {
    return (
        <div className="absolute bg-[#1e2939] left-[112px] rounded-[1.67772e+07px] size-[40px] top-0" data-name="Container63">
            <Icon8 />
        </div>
    );
}

function Container25() {
    return (
        <div className="absolute h-[40px] left-0 top-[40px] w-[152px]" data-name="Container73">
            <Container22 />
            <Container23 />
            <Container24 />
        </div>
    );
}

function Container26() {
    return (
        <div className="[grid-area:1_/_4] place-self-stretch relative shrink-0" data-name="Container113">
            <Heading7 />
            <Container25 />
        </div>
    );
}

function Container27() {
    return (
        <div className="gap-[28px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[168px] overflow-clip relative shrink-0 w-full" data-name="Container213">
            <Container28 />
            <Container20 />
            <Container21 />
            <Container26 />
        </div>
    );
}

function Paragraph12() {
    return (
        <div className="h-[23px] relative shrink-0 w-full" data-name="Paragraph23">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23px] left-[864.36px] text-[#99a1af] text-[14.93px] text-center text-nowrap top-0 tracking-[-0.2921px] translate-x-[-50%] whitespace-pre">© 2024 Primiya's Art Academy. All rights reserved.</p>
        </div>
    );
}

function Container29() {
    return (
        <div className="box-border content-stretch flex flex-col gap-[28px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Container310">
            <div aria-hidden="true" className="absolute border-[#344155] border-solid border-t-0 border-x-0 border-b h-0 left-0 top-0 w-full" />
            <Container27 />
            <Paragraph12 />
        </div>
    );
}

function Footer() {
    return (
        <div className="absolute bg-[#0c1221] box-border h-[351px] left-0 pb-[40px] pt-[48px] px-[132px] top-[3656px] w-[1728px]" data-name="Footer">
            <Container29 />
        </div>
    );
}

function App() {
    return (
        <div className="bg-white h-[4007px] relative w-[1728px]" data-name="App">
            <Section />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </div>
    );
}

export default function AnimateHeroSectionElementsCopy() {
    return (
        <div className="bg-white relative size-full" data-name="Animate Hero Section Elements (Copy)">
            <App />
        </div>
    );
}
