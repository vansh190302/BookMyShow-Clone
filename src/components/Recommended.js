import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Recommended() {
  return (
    <div style={{background:"white", padding:"5%"}}>
        <b><h3>Recommended Movies</h3></b>
        <Carousel indicators={false} >
            <Carousel.Item >
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./a1.jpg" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./a2.jpg" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./a3.jpg" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./a5.jpg" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./a4.jpg" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./a7.jpg" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./a4.jpg" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./a6.jpg" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./a5.jpg" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./a3.jpg" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
        <br /><br /><br />
        <img width={"100%"} src="./stream.jpg"></img>
    </div>
  );
}

export default Recommended;
