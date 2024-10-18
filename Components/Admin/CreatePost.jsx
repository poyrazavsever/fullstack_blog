import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import toast from 'react-hot-toast'; 
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '@/features/post/thunks/createPost';
import { selectCategories } from '@/features/category/categorySlice';
import { fetchCategories } from '@/features/category/thunk/fetchCategories';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreatePost = () => {
    const dispatch = useDispatch();
    const categoriesFromStore = useSelector(selectCategories);
    const [title, setTitle] = useState('');
    const [bannerImage, setBannerImage] = useState(null);
    const [content, setContent] = useState('');
    const [reason, setReason] = useState('');
    const [source, setSource] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBannerImage(file);
        }
    };

    const handleCategoryChange = (e) => {
        const options = e.target.options;
        const selectedCategories = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedCategories.push(options[i].value);
            }
        }
        setCategories(selectedCategories);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = new FormData();
        postData.append('bannerImage', bannerImage);
        postData.append('title', title);
        postData.append('content', content);
        postData.append('reason', reason);
        postData.append('source', source);

        categories.forEach(category => {
            postData.append('categories[]', category);
        });

        try {
            await dispatch(createPost(postData)).unwrap(); 
            toast.success('Post created successfully!'); 
        } catch (error) {
            console.error(error);
            toast.error('Failed to create post.'); 
        }
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Banner Image */}
                <div className="relative w-full h-64 bg-gray-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                    {bannerImage ? (
                        <img
                            src={URL.createObjectURL(bannerImage)} 
                            alt="Banner Preview"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    ) : (
                        <span className="text-gray-500 dark:text-neutral-300">No Image Selected</span>
                    )}
                    <label className="absolute top-2 right-2 bg-white dark:bg-neutral-700 p-2 rounded-full cursor-pointer">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                                <path d="M10.55 3c-3.852.007-5.87.102-7.159 1.39C2 5.783 2 8.022 2 12.5s0 6.717 1.391 8.109C4.783 22 7.021 22 11.501 22c4.478 0 6.717 0 8.108-1.391c1.29-1.29 1.384-3.307 1.391-7.16" />
                                <path d="M11.056 13C10.332 3.866 16.802 1.276 21.98 2.164c.209 3.027-1.273 4.16-4.093 4.684c.545.57 1.507 1.286 1.403 2.18c-.074.638-.506.95-1.372 1.576c-1.896 1.37-4.093 2.234-6.863 2.396" />
                                <path d="M9 17c2-5.5 3.96-7.364 6-9" />
                            </g>
                        </svg>
                    </label>
                </div>

                {/* Title */}
                <div>
                    <label className="block text-lg font-medium dark:text-neutral-300">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 mt-2 bg-white dark:bg-neutral-700 dark:text-white border border-gray-300 rounded"
                        placeholder="Enter post title"
                        required
                    />
                </div>

                {/* Categories */}
                <div>
                    <label className="block text-lg font-medium dark:text-neutral-300">Categories</label>
                    <select 
                        multiple 
                        value={categories} 
                        onChange={handleCategoryChange} 
                        className="mt-2 w-full bg-white dark:bg-neutral-700 dark:text-white border border-gray-300 rounded p-2"
                    >
                        {categoriesFromStore.map(category => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <p className="text-sm text-gray-500 dark:text-neutral-400">Hold down the Ctrl (Windows) or Command (Mac) button to select multiple options.</p>
                </div>

                {/* Content (Quill) */}
                <div>
                    <label className="block text-lg font-medium dark:text-neutral-300">Content</label>
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        className="dark:text-white"
                        required
                    />
                </div>

                {/* Reason (Quill) */}
                <div>
                    <label className="block text-lg font-medium dark:text-neutral-300">Reason</label>
                    <ReactQuill
                        theme="snow"
                        value={reason}
                        onChange={setReason}
                        className="dark:text-white"
                        required
                    />
                </div>

                {/* Source (Quill) */}
                <div>
                    <label className="block text-lg font-medium dark:text-neutral-300">Source</label>
                    <ReactQuill
                        theme="snow"
                        value={source}
                        className="dark:text-white"
                        onChange={setSource}
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-all"
                    >
                        Create Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
