import React, {useEffect, useState} from 'react';
import {Checkbox} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../../redux/reducers/category";
import {changeCategory, changePrice,} from "../../../redux/reducers/orders";

export const CatalogList = () => {


    const dispatch = useDispatch();
    const { category } = useSelector(store => store.category);
    const {filter} = useSelector(store => store.orders);

    const [categories, setCategories] = useState(filter || []);

    // Use an object for selectedCategories with category IDs as keys
    const [selectedCategories, setSelectedCategories] = useState({});

    // Toggle the category's selection status
    const handleCategoryChange = (categoryName) => {
        let categoryData = [];
        const existingCategory = categories.some(category => category === categoryName);
        if(existingCategory){
            categoryData = categories.filter(el => el !== categoryName)
        }else{
            categoryData = [...categories, categoryName]
        }
        setCategories(categoryData);
    };

    const handlePriceChange = (priceName) => {
            dispatch(changePrice(priceName));
        };



    useEffect(() => {
        dispatch(getAllCategory());
     }, []);

    useEffect(() => {
        if(categories) dispatch(changeCategory(categories))
    }, [categories]);


    return (
        <div className="catalog__left">
            <ul className="catalog__left-list">
                <li className="catalog__left-gen">
                    <span>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24.0573" height="24.0573" rx="3.00716" fill="url(#paint0_linear_53_96)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6551 5.06122C15.4847 5.11602 15.2544 5.2792 15.1435 5.42383C14.9463 5.68077 14.9404 5.79847 14.8933 10.4837L14.8451 15.2804L14.4112 14.8495C13.602 14.0459 12.986 13.9284 12.4248 14.4708C12.1427 14.7435 12.097 14.8503 12.097 15.2368V15.6859L13.8115 17.3429L15.5261 19H16.0415H16.557L18.1443 17.4856C19.0175 16.6527 19.793 15.858 19.8678 15.7196C20.2704 14.9751 19.7078 14.154 18.795 14.154C18.4967 14.154 18.3521 14.2396 17.8259 14.7279L17.2075 15.3018L17.2065 10.7905C17.2059 8.30927 17.178 6.11924 17.1447 5.92372C17.0272 5.23717 16.342 4.84045 15.6551 5.06122ZM4.27903 7.53009C3.9776 7.82141 3.91936 8.15383 4.10932 8.49864C4.3501 8.93553 4.27421 8.9291 9.18008 8.93218L13.8326 8.93516V8.09642V7.25768H9.19676H4.56088L4.27903 7.53009ZM4.27903 10.9782C3.9776 11.2695 3.91936 11.602 4.10932 11.9468C4.3501 12.3837 4.27421 12.3772 9.18008 12.3803L13.8326 12.3833V11.5446V10.7058H9.19676H4.56088L4.27903 10.9782ZM4.27903 14.4264C3.91975 14.7737 3.90866 15.1563 4.24682 15.5447L4.49647 15.8314H7.79048H11.0845V15.2024C11.0845 14.8564 11.12 14.4789 11.1633 14.3636L11.2421 14.154H7.90147H4.56088L4.27903 14.4264Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_53_96" x1="-13" y1="-10" x2="33" y2="37.5" gradientUnits="userSpaceOnUse">
<stop offset="0.232794" stop-color="#F95A63"/>
<stop offset="0.473958" stop-color="#0B88D9"/>
<stop offset="0.6875" stop-color="#FAE620"/>
<stop offset="0.755208" stop-color="#4CDE55"/>
</linearGradient>
</defs>
</svg>
</span>Sort By</li>
                <li className="catalog__left-item">
                    <Checkbox onChange={() => handlePriceChange("asc")} />от меньшего
                </li>
                <li className="catalog__left-item">
                    <Checkbox onChange={() => handlePriceChange("desc")} />от большего
                </li>
                <li className="catalog__left-item">
                    <Checkbox onChange={() => handlePriceChange("")}/>по умолчанию
                </li>
            </ul>
            <ul className="catalog__left-list">
                <li className="catalog__left-gen">
                    <span>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24.0573" height="24.0573" rx="3.00716" fill="#0B88D9"/>
<rect width="24.0573" height="24.0573" rx="3.00716" fill="url(#paint0_linear_53_175)"/>
<rect width="24.0573" height="24.0573" rx="3.00716" fill="url(#paint1_linear_53_175)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0734 5.05625C12.0408 5.08712 12.0141 5.42599 12.0141 5.80922C12.0141 6.56589 12.1168 6.77108 12.4954 6.77108C12.8559 6.77108 12.9917 6.52296 12.9917 5.86471C12.9917 5.05516 12.9608 5 12.5082 5C12.3016 5 12.1059 5.0253 12.0734 5.05625ZM6.98767 7.14647C6.79197 7.43001 6.87436 7.60771 7.43477 8.1107C7.93146 8.55651 8.13212 8.62229 8.40904 8.43017C8.70978 8.22143 8.60918 7.88923 8.09578 7.39586C7.54967 6.87102 7.22788 6.79858 6.98767 7.14647ZM16.8653 7.43828C16.4247 7.86081 16.3541 7.96969 16.4026 8.1527C16.4714 8.41263 16.7557 8.57413 17.0297 8.50886C17.355 8.43135 18.0572 7.66126 18.0572 7.38194C18.0572 7.08414 17.9126 6.93976 17.6146 6.93976C17.4524 6.93976 17.2327 7.086 16.8653 7.43828ZM11.6646 7.79013C10.8769 7.92128 9.93395 8.40436 9.31622 8.99329C8.44397 9.82486 8.01713 10.8129 8.01713 12C8.01713 13.1871 8.44397 14.1751 9.31622 15.0067C10.7904 16.4121 13.1436 16.6704 14.8739 15.6168C15.427 15.28 16.2271 14.4545 16.505 13.9341C17.1347 12.7549 17.1298 11.2358 16.4923 10.0421C16.2135 9.51981 15.4356 8.72459 14.8681 8.38151C14.015 7.86578 12.685 7.62028 11.6646 7.79013ZM13.9248 8.99008C14.9513 9.44281 15.7141 10.3935 15.9214 11.4787C16.1903 12.8854 15.335 14.3851 13.9029 15.0183C13.2005 15.3288 12.1105 15.3759 11.3627 15.128C8.24943 14.096 8.22944 9.95659 11.3324 8.86999C12.0363 8.62347 13.2178 8.6782 13.9248 8.99008ZM5.14051 10.9735C4.94758 11.1759 4.95389 11.4338 5.15598 11.6074C5.27888 11.7129 5.49288 11.747 6.03374 11.747C6.81846 11.747 6.97078 11.6692 6.97078 11.2684C6.97078 10.9247 6.73536 10.8193 5.9678 10.8193C5.4217 10.8193 5.25862 10.8497 5.14051 10.9735ZM18.1067 11.0068C17.9236 11.2548 17.9321 11.4367 18.1351 11.611C18.2695 11.7264 18.4452 11.7493 19.0429 11.7294C19.7387 11.7063 19.792 11.6912 19.9151 11.4826C20.0326 11.2834 20.0305 11.2376 19.8939 11.0398C19.7497 10.8309 19.7023 10.8193 18.9934 10.8193C18.3208 10.8193 18.2311 10.8383 18.1067 11.0068ZM10.6958 16.8575C10.5445 16.9581 10.5002 17.0588 10.5206 17.2562C10.5658 17.695 10.7759 17.741 12.6213 17.7154C14.1161 17.6946 14.2609 17.6793 14.3764 17.5291C14.5512 17.3021 14.5339 17.0901 14.3247 16.8916C14.16 16.7352 14.0285 16.7229 12.5227 16.7229C11.1792 16.7229 10.8633 16.7462 10.6958 16.8575ZM11.6586 18.3253C11.4743 18.5002 11.4427 18.6386 11.5348 18.8666C11.579 18.9758 11.748 19 12.4649 19C13.2401 19 13.3515 18.9812 13.4329 18.8368C13.5459 18.6366 13.4233 18.2868 13.2134 18.2103C13.1324 18.1807 12.7893 18.1566 12.4512 18.1566C11.9548 18.1566 11.8022 18.1891 11.6586 18.3253Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_53_175" x1="-11" y1="-7.5" x2="32.5" y2="36.5" gradientUnits="userSpaceOnUse">
<stop offset="0.291667" stop-color="#F95A63"/>
<stop offset="0.473958" stop-color="#0B88D9"/>
<stop offset="0.6875" stop-color="#FAE620"/>
<stop offset="0.755208" stop-color="#4CDE55"/>
</linearGradient>
<linearGradient id="paint1_linear_53_175" x1="-13" y1="-10" x2="33" y2="37.5" gradientUnits="userSpaceOnUse">
<stop offset="0.232794" stop-color="#F95A63"/>
<stop offset="0.473958" stop-color="#0B88D9"/>
<stop offset="0.6875" stop-color="#FAE620"/>
<stop offset="0.755208" stop-color="#4CDE55"/>
</linearGradient>
</defs>
</svg>

</span>Prompts</li>
                {category.map((item) => (
                    <li
                        className="catalog__left-item"
                        key={item.id}
                        // onClick={() => handleCategoryChange(item.name)}
                    >
                        <Checkbox
                            checked={selectedCategories[item._id]}
                            onChange={() => handleCategoryChange(item.name)}
                        />
                        {item.name}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default CatalogList;