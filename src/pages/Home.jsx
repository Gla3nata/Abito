import { useOutletContext } from "react-router-dom"
import { Card } from "../components/Card/Card"

export const Home = () => {
    const {products} = useOutletContext()
    
    return (
        <section className="content">
            <div className="container">
                <div className="content-box">
                    <div className="content-main">
                        <h2 className="content-main__title">Рекомендации для вас</h2>
                        <div className="content-main__list">
                            {
                                products.map((card) => (
                                    <Card
                                        key={card.id}
                                        id={card.id}
                                        title={card.title}
                                        price={card.price}
                                        address={card.address}
                                        date={card.date}
                                        img={card.img}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="content-side">
                        <h3 className="content-side__title">
                            Сервисы и услуги
                        </h3>
                        <div className="content-side__box">
                            <div className="content-side__list">
                                <div className="content-side__item">
                                    <img className="content-side__item-img" src="/images/car.svg" alt="Доставка" />
                                    <h5 className="content-side__item-title">Доставка</h5>
                                    <p className="content-side__item-text">Проверка при получении и возможность бесплатно вернуть товар</p>
                                </div>
                                <div className="content-side__item">
                                    <img className="content-side__item-img" src="/images/auto.svg" alt="Доставка" />
                                    <h5 className="content-side__item-title">Автотека</h5>
                                    <p className="content-side__item-text">Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах</p>
                                </div>
                                <div className="content-side__item">
                                    <img className="content-side__item-img" src="/images/logo.svg" alt="Доставка" />
                                    <h5 className="content-side__item-title">Онлайн-бронирование жилья</h5>
                                    <p className="content-side__item-text">Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России</p>
                                </div>
                            </div>
                        </div>

                        <div className="content-side__footer">
                            <p className="content-side__footer-item">© ООО «Абито», 2011–2021</p>
                            <a className="content-side__footer-item" href="#!">Политика конфиденциальности</a>
                            <a className="content-side__footer-item" href="#!">Обработка данных</a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}