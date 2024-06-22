import './style.css';
import father from '../../assets/img/father.png';
import {motion} from "framer-motion";
import {ADVANTAGES_DATA} from "../../constants/adventage";
import Card from "../../components/Card/Card";

const SecondSec = () => {
    return (
        <div className='second-sec'>
            <div className="container">
                <div className='flex'>
                    {ADVANTAGES_DATA.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <Card
                                    img={item.img}
                                    title={item.title}
                                />
                            </div>
                        )
                    })}
                </div>
                <motion.hr
                    initial={{ x: -300}}
                    animate={{ x:0}}
                    transition={{ duration: 0.5 }}
                />
                <div className="info">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='father'
                        src={father}
                    />
                    <div className="text">
                        <h1 className='name'>Руслан Жакшылыкович</h1>
                        <h4 className='detail'>Инструктор по вождению более 25 лет.</h4>
                        <p className='description'>
                            Омурбеков Руслан Жакшылыкович. Водительский стаж более 25 лет. Опыт преподавания и
                            инструкторский стаж более 12 лет. Индивидуально подготовил практическому вождению 1500+ за 6
                            лет преподавания в автошколе выпустил более 1600+ студентов. Во время преподавания ПДД в
                            автошколе, обнаружил ошибки и не полную информацию в ПДД Кыргызстана от 5.02.2022 года.
                            Отталкиваясь от этих ошибок, составил свою методическое пособие по ПДД.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default SecondSec;