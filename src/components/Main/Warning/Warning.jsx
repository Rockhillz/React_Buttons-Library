import Buttons from "../../shared/Buttons"
import SubText from "../../shared/SubText"
import Titles from "../../shared/Titles"


function Warning() {
  return (
    <>
    <div>
    <Titles> Warning </Titles>
    </div>
    <div>
        <SubText />
    </div>

    <div className="flex justify-between mt-6 mb-[60px]">
        <Buttons>
            Default Button
        </Buttons>

        <Buttons colorName="success">
            Primary Button
        </Buttons>
        
        <Buttons colorName="hoverYellow">
            Hover Button
        </Buttons>

        <Buttons colorName="gold">
            Pressed State
        </Buttons>

        <Buttons colorName="yell">
            <span><i class="fa-solid fa-angle-left"></i></span> Icon Before
        </Buttons>

        <Buttons colorName="yell">
            Icon After <span><i class="fa-solid fa-angle-right"></i></span>
        </Buttons>

       
    </div>
    </>
  )
}

export default Warning
