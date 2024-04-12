import React, { useState } from 'react';
import './SchButton.css';
import { EASTER_EGGS } from '../../includes/paths';

/** Courtesy of Tim Shaw */
export default function SchButton() {
    const icons = [
        {text: 'Off?', src: `${EASTER_EGGS}/sc_box_unpacking.png`},
        {text: 'On?', src: `${EASTER_EGGS}/sc_cardboard_box.png`},
        {text: 'A superposition of both on and off', src: `${EASTER_EGGS}/sc_cardboard_box_closed.png`},
        {text: 'Cute!', src: `${EASTER_EGGS}/sc_schrodingers_cat_alive.png`},
        {text: 'Less Cute.', src: `${EASTER_EGGS}/sc_schrodingers_cat_dead.png`},
        {text: 'Collapse Wave Function.', src: `${EASTER_EGGS}/sc_power_button.png`},
    ]

    const colors = [
        {anim: 'clickcat1', class: 'btn btn-danger'},
        {anim: 'clickcat2', class: 'btn btn-success'},
        {anim: 'clickcat3', class: 'btn btn-danger'},
        {anim: 'clickcat4', class: 'btn btn-success'},
        {anim: 'clickcat5', class: 'btn btn-danger'},
    ]

    const bgs = [
        {bg: 'btn btn-secondary'},
        {bg: 'btn btn-success'},
        {bg: 'btn btn-danger'}
    ]

    const [coloring, setColoring] = useState("btn btn-info");
    const [iconIndex, setIconIndex] = useState(5);
    const [colorIndex, setColorIndex] = useState(0);

    function handleClick() {

        // icons.length
        var num = Math.floor(Math.random()*10);

        if (iconIndexMap(num) != iconIndex) {
            setIconIndex(iconIndexMap(num));
        } else {
            //If it's the same icon, update background?
            // num = Math.floor(Math.random()*3);
            // setColoring(bgs[num].bg);
        }

        num = Math.floor(Math.random()*10);
        setColorIndex(colorIndexMap(num));
        setColoring(colors[colorIndex].class);
    }

    function eventDoneColorIt() {
        
        var num = Math.floor(Math.random()*3);
        // setColorIndex(colorIndexMap(num));
        // console.log(colors[colorIndex].class);
        setColoring(bgs[num].bg);
    }

    function iconIndexMap(num)
    {
        switch (num)
        {
            case 0: ;
            case 1: return 0; break;
            case 2: ;
            case 3: return 1; break;
            case 4: ;
            case 5: return 2; break;
            case 6: ;
            case 7: return 3; break;
            case 8: ;
            case 9: return 4; break;
            default:
                return 5;
        }
    }

    function colorIndexMap(num) {
        switch(num)
            {
                //R
                case 0: return 0; break;
                case 1: return 0; break;
                case 2: return 0; break;
                //G
                case 3: return 1; break;
                case 4: return 1; break;
                case 5: return 1; break;
                //B
                case 6: return 2; break;
                case 7: return 2; break;
                //Gr
                case 8: return 3; break;
                //Fu
                case 9: return 4; break;
                default:
                    return 0;
            }
    }

    const iconImg = () => {
        if (iconIndex === 5) {
            return 'Open box';
        } else {
            return (
                <img
                    className="boxicon"
                    title={icons[iconIndex].text}
                    src={icons[iconIndex].src}
                />
            );
        }
    }

    return (
        <button
            className={`nav-btn ms-3 ${coloring}`}
            onClick={handleClick}
            onAnimationEnd={eventDoneColorIt}
        >
            {iconImg()}
        </button>
    );
}