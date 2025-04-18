import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

export default function Card(props:any)  {
    

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return(
      <>
        <div className="p-4 w-full">
          <div className="card md:card-side shadow-sm backdrop-blur-xl">
            <figure>
              <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </Carousel>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {props.title}
              </h2>
              <p>{props.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Java</div>
                <div className="badge badge-outline">Spring</div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}