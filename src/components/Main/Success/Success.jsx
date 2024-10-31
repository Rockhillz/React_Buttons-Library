import Buttons from "../../shared/Buttons"
import SubText from "../../shared/SubText"
import Titles from "../../shared/Titles"


function Success() {
  return (
    <>
    <div>
    <Titles> Success </Titles>
    </div>
    <div>
        <SubText />
    </div>

    <div className="flex justify-between mt-6 mb-[60px]">
        <Buttons>
            Default Button
        </Buttons>

        <Buttons colorName="green">
            Primary Button
        </Buttons>
        
        <Buttons colorName="lightGreen">
            Hover Button
        </Buttons>

        <Buttons colorName="darkGreen">
            Pressed State
        </Buttons>

        <Buttons colorName="greee">
            <span><i class="fa-solid fa-angle-left"></i></span> Icon Before
        </Buttons>

        <Buttons colorName="greee">
            Icon After <span><i class="fa-solid fa-angle-right"></i></span>
        </Buttons>

       
    </div>
    </>
  )
}

export default Success
