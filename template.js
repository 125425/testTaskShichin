const template = item => {
    var str = item.primaryImageUrl;
    var newStr = str.substring(0, str.length - 4);
    var imgSrc = 'http:' + newStr + '_220x220_1.jpg';

    const priceTemplate = (price, discountPrice) => `
        <p class="product_price_club_card">
            <span class="product_price_club_card_text">По карте<br>клуба</span>
            <span class="goldPrice">${discountPrice.toFixed(2)} </span>
            <span class="rouble__i black__i">
                <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
                </svg>
                </span>
        </p>
        <p class="product_price_default">
            <span class="retailPrice">${price.toFixed(2)}</span>
            <span class="rouble__i black__i">
                <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
                </svg>
                </span>
        </p>
    `;

    return `
    <div id="products_section">
        <div class="products_page pg_0">
            <div class="product product_horizontal">
                    <span class="product_code">Код: ${item.code.slice(5)}</span>
                <div class="product_status_tooltip_container">
                    <span class="product_status">Наличие </span>
                </div>
                <div class="product_photo">
                    <a href="#" class="url--link product__link">
                        <img src='${imgSrc}'>
                    </a>
                </div>
                <div class="product_description">
                    <a href="#" class="product__link"> ${item.title} </a>
                </div>
                <div class="product_tags hidden-sm">
                    <p>Могут понадобиться:</p>
                    ${item.assocProducts}

                </div>
                <div class="product_units">
                    <div class="unit--wrapper">
                        <div class="unit--select unit--active unit--select_unit_m" data-unit="m">
                            <p class="ng-binding"> За ${item.unitAlt}</p>
                        </div>
                        <div class="unit--select unit--select_unit_pack" data-unit="pack">
                            <p class="ng-binding"> За ${item.unit}</p>
                        </div>
                    </div>
                </div>
                <div class="product-price product-price_unit_m">
                    ${priceTemplate(item.priceRetail, item.priceGold)}
                </div>
                <div class="product-price product-price_unit_pack">
                    ${priceTemplate(item.priceRetailAlt, item.priceGoldAlt)}
                </div>
                <div class="product_price_points">
                    <p class="ng-binding">Можно купить за  ${item.priceRetail/item.bonusAmount} балла</p>
                </div>
                <div class="list--unit-padd"> </div>
                <div class="list--unit-desc">
                    <div class="unit--info">
                        <div class="unit--desc-i"></div>
                        <div class="unit--desc-t">
                            <p>
                                <span class="ng-binding">Продается упаковками:</span>
                                <span class="unit--infoInn"> ${item.unitRatio}  ${item.unit} = ${item.unitRatioAlt.toFixed(2)}  ${item.unitAlt} </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="product__wrapper">
                    <div class="product_count_wrapper">
                        <div class="stepper">
                            <input class="product__count stepper-input" type="text" value="1">

                            <span class="stepper-arrow up"></span>
                            <span class="stepper-arrow down"></span>
                        </div>
                    </div>
                    <span class="btn btn_cart" data-url="/cart/" data-product-id=${item.productId}>
                        <svg class="ic ic_cart">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
                        </svg>
                        <span class="ng-binding">В корзину</span>
                    </span>
                </div>
            </div>
        </div>
    </div>`
};
