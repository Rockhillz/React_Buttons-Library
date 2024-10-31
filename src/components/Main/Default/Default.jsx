import Buttons from "../../shared/Buttons"
import SubText from "../../shared/SubText"
import Titles from "../../shared/Titles"


function Default() {
  return (
    <>
    <div>
    <Titles >Default</Titles>
    </div>
    <div>
        <SubText />
    </div>

    <div className="flex justify-between mt-6 mb-[60px]">
        <Buttons>
            Default Button
        </Buttons>

        <Buttons colorName="smoky">
            Primary Button
        </Buttons>
        
        <Buttons colorName="linene">
            Hover Button
        </Buttons>

        <Buttons colorName="white">
            Pressed State
        </Buttons>

        <Buttons colorName="wheat">
            <span><i class="fa-solid fa-angle-left"></i></span> Icon Before
        </Buttons>

        <Buttons colorName="wheat">
            Icon After <span><i class="fa-solid fa-angle-right"></i></span>
        </Buttons>

       
    </div>
    </>
  )
}

export default Default
