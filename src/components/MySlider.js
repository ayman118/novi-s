import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Slide from './Slide/Slide';
//import data from '../data.json'
import useStrapiData from '../hooks/useFetch';
import {isEmpty} from 'lodash'

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function MySlider() {
const data = useStrapiData('http://localhost:1337/api/sliders') 
      

    const media = data?.map((item)=> (
    {
        children: <Slide
            title={item.attributes.title}
            desc={item.attributes.desc}
            img={item.backgroundimage}
        />
    })
)
    return (
        <AutoplaySlider
            media={media}
            play={true}
            cancelOnInteraction={false}
            interval={1000}
            fillParent={true}
            bullets={false}
            organicArrows={false}
        />
    );
}

