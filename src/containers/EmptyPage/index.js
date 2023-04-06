import "./styles.scss"
import React from "react";

const EmptyPage = () => {

    return(
        <div className="emptyBlock">
            <h1>ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО</h1>
            <p>Простите, по вашему запросу<br/> товаров сейчас нет. Задайте запрос<br/> по-другому или измените<br/> характеристики</p>
        </div>
    )

}

export default EmptyPage;