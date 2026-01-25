import { useContext, useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";
import { AuthContext } from "../providers/AuthProvider";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.uid) {
            const storedBlogs = getBlogs(user.uid);
            setBlogs(storedBlogs);
        }
    }, [user])


    const handleDelete = id => {
        if (user?.uid) {
            deleteBlog(id, user.uid);
            const storedBlogs = getBlogs(user.uid);
            setBlogs(storedBlogs);
        }
    }
    if (blogs.length < 1) return <EmptyState message='No Bookmarks Available!' address={'/blogs'} lable={'Go To Blogs'}></EmptyState>
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map(blog => (
                <BlogCard
                    handleDelete={handleDelete}
                    deletable={true}
                    blog={blog}
                    key={blog.id}
                >
                </BlogCard>
            ))}
        </div>
    );
};

export default Bookmarks;