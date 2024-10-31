import Buttons from "../../shared/Buttons"
import SubText from "../../shared/SubText"
import Titles from "../../shared/Titles"


function Primary() {
  return (
    <>
    <div>
    <Titles>Primary</Titles>
    </div>
    <div>
        <SubText />
    </div>

    <div className="flex justify-between mt-6 mb-[60px]">
        <Buttons>
            Default Button
        </Buttons>

        <Buttons colorName="primary">
            Primary Button
        </Buttons>
        
        <Buttons colorName="hover">
            Hover Button
        </Buttons>

        <Buttons colorName="navyBlue">
            Pressed State
        </Buttons>

        <Buttons colorName="babyBlue">
            <span><i class="fa-solid fa-angle-left"></i></span> Icon Before
        </Buttons>

        <Buttons colorName="babyBlue">
            Icon After <span><i class="fa-solid fa-angle-right"></i></span>
        </Buttons>

       
    </div>
    </>
  )
}

export default Primary