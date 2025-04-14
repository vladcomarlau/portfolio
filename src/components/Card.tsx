export default function Card(props)  {
    return(
      <>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-1/1">
          <div className="card shadow-sm backdrop-blur-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {props.title}
              </h2>
              <p>{props.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}