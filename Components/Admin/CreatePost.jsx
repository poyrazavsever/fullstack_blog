import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Next.js dinamik import için
import 'react-quill/dist/quill.snow.css'; // React-Quill stil dosyası

// React-Quill SSR için dinamik olarak import ediliyor
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [bannerImage, setBannerImage] = useState(null); // Banner image dosyası
    const [content, setContent] = useState('');
    const [reason, setReason] = useState('');
    const [source, setSource] = useState('');
    const [categories, setCategories] = useState([]);

    // Dosya yüklenince tetiklenen fonksiyon
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBannerImage(reader.result); // Base64 formatında görüntü kaydediliyor
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            bannerImage,
            title,
            content,
            reason,
            source,
            categories,
        };

        console.log('Post Data:', postData);
        // Form verilerini backend'e gönder (API isteği)
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Banner Image */}
                <div className="relative w-full h-64 bg-gray-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                    {bannerImage ? (
                        <img
                            src={bannerImage}
                            alt="Banner Preview"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    ) : (
                        <span className="text-gray-500 dark:text-neutral-300">No Image Selected</span>
                    )}

                    <label className="absolute top-2 right-2 bg-white dark:bg-neutral-700 p-2 rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M10.55 3c-3.852.007-5.87.102-7.159 1.39C2 5.783 2 8.022 2 12.5s0 6.717 1.391 8.109C4.783 22 7.021 22 11.501 22c4.478 0 6.717 0 8.108-1.391c1.29-1.29 1.384-3.307 1.391-7.16" /><path d="M11.056 13C10.332 3.866 16.802 1.276 21.98 2.164c.209 3.027-1.273 4.16-4.093 4.684c.545.57 1.507 1.286 1.403 2.18c-.074.638-.506.95-1.372 1.576c-1.896 1.37-4.093 2.234-6.863 2.396" /><path d="M9 17c2-5.5 3.96-7.364 6-9" /></g></svg>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
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
                    <input
                        type="text"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value.split(','))} // Virgülle ayırarak kategori girişi
                        className="w-full p-2 mt-2 bg-white dark:bg-neutral-700 dark:text-white border border-gray-300 rounded"
                        placeholder="Enter categories, separated by commas"
                    />
                </div>

                {/* Content (Quill) */}
                <div>
                    <label className="block text-lg font-medium dark:text-neutral-300">Content</label>
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        className=" dark:text-white"
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
                        className=" dark:text-white"
                        required
                    />
                </div>

                {/* Source (Quill) */}
                <div>
                    <label className="block text-lg font-medium dark:text-neutral-300">Source</label>
                    <ReactQuill
                        theme="snow"
                        value={source}
                        className=" dark:text-white"
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
