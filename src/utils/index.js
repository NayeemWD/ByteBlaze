import toast from "react-hot-toast";

// Helper to get the key based on UID
const getInstanceKey = (uid) => `bookmarks_${uid}`;

export const getBlogs = (uid) => {
  if (!uid) return [];
  let blogs = [];
  const storedBlogs = localStorage.getItem(getInstanceKey(uid));
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

// save
export const saveBlog = (blog, uid) => {
  if (!uid) return toast.error("User not authenticated!");
  let blogs = getBlogs(uid);
  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    return toast.error("Already Bookmarked!");
  }
  blogs.push(blog);
  localStorage.setItem(getInstanceKey(uid), JSON.stringify(blogs));
  toast.success("Blog Bookmarked Successfully!");
};

// delete
export const deleteBlog = (id, uid) => {
  if (!uid) return;
  let blogs = getBlogs(uid);
  const remaining = blogs.filter((b) => b.id !== id);
  localStorage.setItem(getInstanceKey(uid), JSON.stringify(remaining));
  toast.success("Blog Removed from Bookmark!");
};