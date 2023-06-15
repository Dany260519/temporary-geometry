import React, {useState, useEffect} from 'react'
import Buttons from './Buttons';
import Components from './Components';


function Functions() {
    const figures = ['circle','triangle','square','rectangle','rhombus','trapezium','hexagon', 'pentagon','cylinder','prism','pyramid','cube','sphere','cone']

    const figuresImg = {
        circle: 'https://icones.pro/wp-content/uploads/2021/04/icone-cercle-noir.png',
        triangle: 'https://cdn-icons-png.flaticon.com/512/13/13384.png',
        square: 'https://images.vexels.com/media/users/3/139342/isolated/lists/61cddf9cfe50f4baaa8f472c253d1cb4-contorno-square-basico.png',
        rectangle: 'https://cdn.icon-icons.com/icons2/1416/PNG/512/software-shape-rectangle_98272.png',
        rhombus: 'https://cdn-icons-png.flaticon.com/512/32/32390.png',
        trapezium: 'https://www.calcularareas.com/storage/2022/05/area-del-trapecio.png',
        hexagon: 'https://cdn-icons-png.flaticon.com/512/105/105080.png',
        pentagon: 'https://cdn-icons-png.flaticon.com/512/33/33807.png',
        cylinder: 'https://img.freepik.com/iconos-gratis/cylinder_318-208080.jpg',
        prism: 'https://cdn-icons-png.flaticon.com/512/43/43108.png',
        pyramid: 'https://img.freepik.com/iconos-gratis/pyramid_318-262309.jpg',
        cube: 'https://cdn-icons-png.flaticon.com/512/58/58537.png',
        sphere: 'https://cdn.icon-icons.com/icons2/2473/PNG/512/shape_geometry_geometric_d_sphere_round_icon_149664.png',
        cone: 'https://cdn-icons-png.flaticon.com/512/2627/2627892.png'
    }

    const [messenger, setMessenger] = useState('');

    const [figureRandom, setFigureRandom] = useState(null);

    const [show, setShow] = useState(false);

    useEffect(() => {
       setFigureRandom (figures[Math.floor(Math.random()*figures.length)])
    }, [])

    function Choose(fig) {
        if( fig === figureRandom) {
            setShow(true)
        } else {
            setMessenger('PAY ATTENTION!')
        }
    }
        

  return (
    <div>
        {
        show ? 
        <div>
            <h1 id='result'>GOOD JOB!</h1>
            <Buttons />
        </div> :
        <div>
            <Components />

            <p className='quest'>Which of these figures is: 
            <br></br>
            "{figureRandom}"
            </p>

            {figures.map((figure) => (
            <button key={figure} onClick={()=> Choose(figure)} id='buttonsFig'>
            <img src = {figuresImg[figure]} alt={figure} className ='img' />
            </button>))}

            <p id='repit'>{messenger}</p>

            <Buttons />
        </div>
        }
        </div>
  )
}

export default Functions