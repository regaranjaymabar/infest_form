import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function HomePagePraktek (){
    return (
        <div>
            <section
                      id='hero'
                      className='py-10 flex gap-10 justify-between items-center'
                    >
                      <div className='w-2/3 flex flex-col gap-6'>
                        <img
                          src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
                          alt=""
                          className='w-96'
                        />
                        <p className='text-sm md:text base lg:text-[1.35remtext-slate-600'>
                          Invofest (Informatics Vocational Festival) adalah festival tahunan
                          yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
                          Indonesia dalam menghadapi era digital. Dengan mengusung tema
                          <b>“Beyond Limits, Beyond Intelligence: Innovate for a Smarter
                          Tomorrow ”</b>.
                        </p>
                        <div className='flex gap-3'> 
                          <Button label="Info Selengkapnya" variant="primary"/>
                          <Button label="Hubungi Panitia" variant="secondary"/>
                        </div>
                      </div>
                      <div className='w-1/3'>
                        <img
                          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                          alt=""
                        />
                      </div>
                    </section>
            {/* <nav>
                <ul>
                    <li><Link to="/"> Beranda</Link></li>
                    <li><Link to="/competition"> Competition</Link></li>
                    <li><Link to="/workshop"> Workshop</Link></li>
                    <li><Link to="/seminar"> seminar</Link></li>
                </ul>
            </nav> */}
        </div>
    )
}