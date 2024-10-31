import Buttons from "../../shared/Buttons"
import SubText from "../../shared/SubText"
import Titles from "../../shared/Titles"


function Danger() {
  return (
    <>
    <div>
    <Titles >Destructive</Titles>
    </div>
    <div>
        <SubText />
    </div>

    <div className="flex justify-between mt-6 mb-[60px]">
        <Buttons>
            Default Button
        </Buttons>

        <Buttons colorName="danger">
            Primary Button
        </Buttons>
        
        <Buttons colorName="coral">
            Hover Button
        </Buttons>

        <Buttons colorName="darkRed">
            Pressed State
        </Buttons>

        <Buttons colorName="lightSalmon">
            <span><i class="fa-solid fa-angle-left"></i></span> Icon Before
        </Buttons>

        <Buttons colorName="lightSalmon">
            Icon After <span><i class="fa-solid fa-angle-right"></i></span>
        </Buttons>

       
    </div>
    </>
  )
}

export default Danger
