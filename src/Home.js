import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(
        [
            {title:'Harry Potter', body:'lorem', author:'Jk Rowling', id: 1 },
            {title:'LOTR', body:'lorem', author:'JRR Tolkien', id: 2 },
            {title:'GOT', body:'lorem', author:'George RR Martin', id: 3 }

        ]
   );
const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs( newBlogs )
}   

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title = 'Modern Hits' handleDelete = { handleDelete }/>
            <BlogList blogs = { blogs.filter((blog)=> blog.author === 'JRR Tolkien')} title='Classics' handleDelete = { handleDelete }/>

        </div>
       

     );
}
 
export default Home;
    