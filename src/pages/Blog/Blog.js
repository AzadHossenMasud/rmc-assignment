import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import BlogItem from './BlogItem/BlogItem';

const Blog = () => {
    const [foods, setFoods]=useState([])
    useEffect(()=>{
        fetch('https://rmc-server.vercel.app/foods')
        .then(res => res.json())
        .then( data => {
            console.log(data)
            setFoods(data)
        })
    },[])
    return (
        <>
        <Header></Header>
        <h1 className='my-5 text-2xl text-purple-900 text-center font-bold '>My All Blogs</h1>

        <div className='w-3/4 mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
        {
            foods.map(food => <BlogItem key={food._id} food={food}></BlogItem>)
        }
        </div>
       
        <Footer></Footer>
        </>
    );
};

export default Blog;