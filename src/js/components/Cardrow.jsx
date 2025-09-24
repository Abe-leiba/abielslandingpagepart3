import Card from "./Card";

const Cardrow = () => {

    return (
        <>
            <div className="row d-flex">
                <div className="col-sm-3 col-12">
            <Card />
             </div>
                 <div className="col-sm-3 col-12">
            <Card />
             </div>
                 <div className="col-sm-3 col-12">
            <Card />
             </div>
                <div className="col-sm-3 col-12">
            <Card />
             </div>
          </div>
        </>

    );
}

export default Cardrow;