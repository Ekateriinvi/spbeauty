import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex flex-row mt-5'>
                <General/> 
                <div class="col-2"></div>   {/* Основная информация вроде названия, типа и телефона */}
                <Addresses/>
                <div class="col24"></div>{/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;