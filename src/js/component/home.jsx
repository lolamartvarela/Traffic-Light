import React, {useState} from "react";
// 1. importar el hook useState

// use state = usar estado;

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// create your first component
const Home = () => { // Color Rojo
    const [color1, setColor1] = useState("");


    function encenderRojo() {

        if (color1 === "btn-danger") {
            setColor1("")
        } else {
            setColor1("btn-danger")
            setColor2("btn ")
            setColor3("btn ")
        }
    }

    // Color Amarillo
    const [color2, setColor2] = useState("")

    function encenderAmarillo() {

        if (color2 === "btn-warning") {
            setColor2("")
        } else {
            setColor2("btn-warning")
            setColor1("btn ")
            setColor3("btn ")
        }
    }
    // Color Verde
    const [color3, setColor3] = useState("")

    function encenderVerde() {

        if (color3 === "btn-success") {
            setColor3("")
        } else {
            setColor3("btn-success")
            setColor2("btn ")
            setColor1("btn ")
        }
    }

    // Return botones
    return (
        <div>
			<div className="bg-dark text-center d-flex flex-column container mt-2"style={
                    {
                        width: 2,
                        height: 150
                    }
            }></div>

            <div className="text-center d-flex flex-column container rounded bg-dark"
                style={
                    {
                        width: 80,
                        height: 200
                    }
            }>

                <div>
                    <button className={
                            "btn rounded-circle border-danger my-1 my-2 " + color1
                        }
                        style={
                            {
                                width: 50,
                                height: 50
                            }
                        }
                        onClick={encenderRojo}></button>
                </div>

                <div>
                    <button className={
                            "btn rounded-circle border-warning my-1 my-2 " + color2
                        }
                        style={
                            {
                                width: 50,
                                height: 50
                            }
                        }
                        onClick={encenderAmarillo}></button>
                </div>

                <div>
                    <button className={
                            "btn rounded-circle border-success my-1 my-2 " + color3
                        }
                        style={
                            {
                                width: 50,
                                height: 50
                            }
                        }
                        onClick={encenderVerde}></button>
                </div>
            </div>
        </div>
    );

};

export default Home;
