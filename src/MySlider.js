import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Slide1 from './Slide1/Slide1'
import background from './/Slide1/images/hg-min.jpg'
//import './Slide1/Slide1.css'

//import './MySlider.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const media = [
  {
    children: <Slide1 
    title="Sample Headline"
    desc="dsadasnskljanfsljdfnklkfnLAKFNNFKLlksnLCNNsdlnsDKNDkndNLKSDSNsnklndKLDSNKLDDSDSmdskasksMDñdmsaLSMDsdaasdNDKLdnkDkmdsdsaasdasdSN"
     img="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"/>
  }
,

]

export default function MySlider() {
  return(
    <AutoplaySlider
    media={media}
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    fillParent={true} 
    bullets={false}
    organicArrows={false}
  />
);

  /*
  const data = [
    {
      id: "1",
      title: "first",
      desc:
        "description",
      img:
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
    },
    {
      id: "2",
      title: "second",
      desc:
        "description",
      img:
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
    },
    {
      id: "3",
      title: "third",
      desc:
        "Lorem Ipsum.",
      img:
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
    }
  ];
  return (
    <div className="App">
      <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={3000}
>
        {data.map((d) => (
          <div className="item"> 
                <div className="imgContainer">
                  <img src={d.img} />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc} </p>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
        */}