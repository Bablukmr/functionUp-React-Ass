import React from "react"
import { useState } from "react"
import { useEffect } from "react"


export default function Fetch() {



    const [img, setImg] = useState('')

    useEffect(changeImg, [])

    function changeImg() {

        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => setImg(data.message))

    }


    return (
        <div>
            <h1>Every Page Refresh New Dog Image Show</h1>
            <img style={{ borderRadius: '50%' }} src={img} width='400px' height='400px' />

        </div>
    )

}

