import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Slide from './Slide/Slide';
import useStrapiData from '../hooks/useStrapiData';
import { isEmpty } from 'lodash'
import { getStrapiImageUrl } from '../utils';
import WeatherSlide from '../service/Weather';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function MySlider() {
    const data = useStrapiData()

    const media = data?.map((item) => (
        {
            children: <Slide
                title={item.attributes.title}
                desc={item.attributes.desc}
                img={getStrapiImageUrl(item.attributes.backgroundimage.data)}
            />
        }
    ))

    if (!isEmpty(media)) {
        media.push({
            children: <WeatherSlide />
        })
    } else {
        return <></>
    }

    return (
        <AutoplaySlider
            media={media}
            play={true}
            cancelOnInteraction={false}
            interval={2000}
            fillParent={true}
            bullets={false}
            organicArrows={false}
        />
    );
}
