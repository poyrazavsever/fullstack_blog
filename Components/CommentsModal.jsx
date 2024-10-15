import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// React Quill bileşenini dinamik olarak yükle
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; // Quill'in stillerini dahil ediyoruz

const CommentsModal = ({ onClose }) => {
    const [comments, setComments] = useState([
        { id: 1, text: 'Great blog post!', author: 'John Doe' },
        { id: 2, text: 'Very informative, thanks for sharing!', author: 'Jane Smith' }
    ]);

    const [newComment, setNewComment] = useState('');
    const [author, setAuthor] = useState('');

    const handleAddComment = () => {
        if (newComment.trim() && author.trim()) {
            setComments([...comments, { id: comments.length + 1, text: newComment, author }]);
            setNewComment('');
            setAuthor('');
        }
    };

    const quillModules = {
        toolbar: [
            ['bold', 'italic'], // Sadece bold ve italik araçları
        ],
    };

    return (
        <motion.div
            className="absolute right-0 top-0 h-full w-80 p-4 overflow-y-auto 
      bg-white/70 dark:bg-black/70 text-black dark:text-white 
      backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, x: 300 }} // Animasyon başlangıcı
            animate={{ opacity: 1, x: 0 }} // Animasyon bitişi
            exit={{ opacity: 0, x: 300 }} // Animasyon çıkışı
            transition={{ duration: 0.3 }} // Geçiş süresi
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Comments</h2>
                <button onClick={onClose} aria-label="Close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 5L5 19M5 5l14 14" color="currentColor" /></svg>
                </button>
            </div>

            {/* Yorum ekleme kısmı */}
            <div className="mb-4">

                {/* Dinamik olarak yüklenen React Quill bileşeni */}
                <ReactQuill
                    value={newComment}
                    onChange={setNewComment}
                    modules={quillModules}
                    className="mb-4 dark:text-white"
                    theme="snow" // Dark modda da "snow" teması kullanılacak
                />

                <button
                    onClick={handleAddComment}
                    className="w-full bg-neutral-500 text-white p-2 rounded hover:bg-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-800"
                >
                    Add Comment
                </button>
            </div>

            {/* Yorumları listeleme */}
            <div className="space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="p-2 border bg-neutral-100 border-neutral-200 rounded dark:bg-neutral-800 dark:border-neutral-800 bg-opacity-30 dark:bg-opacity-30">
                        <div dangerouslySetInnerHTML={{ __html: comment.text }} className="mb-1"></div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">- {comment.author}</div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default CommentsModal;
