import React, { useEffect, useState } from 'react';
import { getCate, getFilterBrand, getFilters, getProducts, numberPage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from '../../styles/FiltersResponsive.module.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

export default function FilterAcordion () {

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        "brand": [],
        "categorie": "",
        "order": "minor",
        "praice": {
            "min": "",
            "max": ""
        }
    })

    const data = useSelector((state) => state.filterBrands)
    const cate = useSelector((state) => state.cate)
    const brandRepeat = data.map(e => e).sort()
    const brands = [...new Set(brandRepeat)]
    const allCategories = cate.map(e => e.name).sort()
    let navigate = useNavigate()

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCate())
        dispatch(getFilterBrand())
    }, [dispatch])

    function handleCLickRecharge(e) {  
        window.location.reload()
        dispatch(getProducts())
        dispatch(getCate())
        dispatch(numberPage(1))
        navigate('/allProducts')
        setInput({
            "brand": [],
            "categorie": "",
            "order": "minor",
            "praice": {
                "min": "",
                "max": ""
            }
        })
    }

    function handleCategory(e) {
        e.preventDefault(e);
        setInput({
            ...input,
            categorie: e.target.value
        });
    }

    function handleOrderBrand(e) {
        e.preventDefault(e);
        if (input.brand.includes(e.target.value)) {
            return
        } else {
            setInput({
                ...input,
                brand: [...input.brand, e.target.value]
            })
        }
    }

    function handleDelete(e) {
        setInput({
            ...input,
            brand: input.brand.filter(c => c !== e)
        })
    }

    function handleFilterMin(e) {
        e.preventDefault(e);
        setInput({
            ...input,
            praice: {
                min: e.target.value,
                max: input.praice.max
            }
        });
    }

    function handleFilterMax(e) {
        e.preventDefault(e);
        setInput({
            ...input,
            praice: {
                min: input.praice.min,
                max: e.target.value
            }
        });
    }

    return (
        <Accordion allowToggle bg='brand.greenYellow'>
            <AccordionItem>
                <h2>
                <AccordionButton color='brand.gray'>
                        Filtro
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}