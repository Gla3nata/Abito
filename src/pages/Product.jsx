import { useOutletContext, useParams } from "react-router-dom";

export const Product = () => {
    const { products } = useOutletContext()
    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id);
    return (
        <section className="content">
            <div className="container">
                {
                    findProduct ?
                        <div className="content-box">
                            <div className="content-product">
                                <div className="content-product__info">
                                    <h2 className="content-product__title">{findProduct.title}</h2>
                                    <img className="content-product__img" src={findProduct.img} alt="product__image" />
                                    <div className="content-product__desc">
                                        {findProduct.description}
                                    </div>
                                </div>
                                <div className="content-product__order">
                                    <span className="content-product__price">
                                        {findProduct.price}
                                    </span>
                                    <button className="btn btn-primary">Показать телефон</button>
                                </div>

                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">
                                    Сервисы и услуги
                                </h3>
                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        <div className="content-side__item">
                                            <img className="content-side__item-img" src="../images/car.svg" alt="Доставка" />
                                            <h5 className="content-side__item-title">Доставка</h5>
                                            <p className="content-side__item-text">Проверка при получении и возможность бесплатно вернуть товар</p>
                                        </div>
                                        <div className="content-side__item">
                                            <img className="content-side__item-img" src="/images/auto.svg" alt="Автотека" />
                                            <h5 className="content-side__item-title">Автотека</h5>
                                            <p className="content-side__item-text">Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах</p>
                                        </div>
                                        <div className="content-side__item">
                                            <img className="content-side__item-img" src="/images/logo.svg" alt="Онлайн-бронирование" />
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

                        :
                        <div>Такого товара не существует</div>
                }

            </div>
        </section>
    )
}