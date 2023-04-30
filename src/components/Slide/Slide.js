import './Slide.css'

function Slide(props) {
    return (
        <section className="u-clearfix u-shading u-section-1" style={{ backgroundImage: `url(${props.img})` }}>
            <div className="u-clearfix u-sheet-1">
                <h1 className="u-text-1">{props.title}</h1>
                <div className='u-text-2-div'>
                    <p className="u-text-2">{props.desc}</p>
                </div>
            </div>
        </section>
    )
}

export default Slide