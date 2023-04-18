import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Slide from './Slide/Slide'

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const media = [
    {
        children: <Slide
            title="Sample Headline 1"
            desc="dsadasnskljanfsljdfnklkfnLAKFNNFKLlksnLCNNsdlnsDKNDkndNLKSDSNsnklndKLDSNKLDDSDSmdskasksMDñdmsaLSMDsdaasdNDKLdnkDkmdsdsaasdasdSN"
            img="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
        />
    },
    {
        children: <Slide
            title="Sample Headline 2"
            desc="dsadasnskljanfsljdfnklkfnLAKFNNFKLlksnLCNNsdlnsDKNDkndNLKSDSNsnklndKLDSNKLDDSDSmdskasksMDñdmsaLSMDsdaasdNDKLdnkDkmdsdsaasdasdSN"
            img="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
        />
    },
    {
        children: <Slide
            title="Sample Headline 3"
            desc="dsadasnskljanfsljdfnklkfnLAKFNNFKLlksnLCNNsdlnsDKNDkndNLKSDSNsnklndKLDSNKLDDSDSmdskasksMDñdmsaLSMDsdaasdNDKLdnkDkmdsdsaasdasdSN"
            img="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
        />
    },
]

export default function MySlider() {
    return (
        <AutoplaySlider
            media={media}
            play={true}
            cancelOnInteraction={false}
            interval={3000}
            fillParent={true}
            bullets={false}
            organicArrows={false}
        />
    );
}
