import React from 'react'
import {Button} from 'reactstrap'
import "./jumbotron.css"

function Jumbotron() {
  return (
    <div className="d-block d-lg-flex container-fluid jumbotron position-relative align-items-start justify-content-center pop " style={{width: "", height: "100%"}}>
            <div className='mx-4'>
            <h1 className=" " >Dashboard Heading</h1>
            {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <Button className="btn btn-primary btn-lg mb-2" type="button">Learn more</Button>
            </p> */}
            </div>
</div>
  )
}

export default Jumbotron